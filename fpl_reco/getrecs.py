import os
import sys
import mysql.connector
from mysql.connector import Error
import numpy as np
import pandas as pd
import math


def PEP3333(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/plain')])
    message = 'It works!\n'
    version = 'Python v' + sys.version.split()[0] + '\n'
    response = '\n'.join([message, version])
    return [response.encode()]

def connectDB():
	try:
		connection = mysql.connector.connect(host='localhost',
	                                         database='fplrecommender_MainDataDB',
	                                         user='fplrecommender_commonUser',
	                                         password='Australia101')
		while not connection.is_connected():
			continue
		return connection
	except Error:
		print('Error while connecting: ' + str(Error))

def runCommand(connection):
	cursor = connection.cursor()
	cursor.execute("select f.player_id, f.first_name, f.last_name, f.goals_scored, f.assists, f.minutes, f.goals_conceded, f.creativity, f.influence, f.threat, f.bonus, f.bps, f.ict_index, f.clean_sheets, f.red_cards, f.yellow_cards, f.selected_by_percent, f.now_cost, f.position, p.team, p.status, p.points_per_game from fpl_indices_stats f join playerStats p on p.name = f.last_name;")
	return cursor.fetchall()

class RandomForest():
    def __init__(self, x, y, n_trees, n_features, sample_sz, depth=10, min_leaf=5):
        np.random.seed(12)
        if n_features == 'sqrt':
            self.n_features = int(np.sqrt(x.shape[1]))
        elif n_features == 'log2':
            self.n_features = int(np.log2(x.shape[1]))
        else:
            self.n_features = n_features 
        self.x, self.y, self.sample_sz, self.depth, self.min_leaf  = x, y, sample_sz, depth, min_leaf
        self.trees = [self.create_tree() for i in range(n_trees)]

    def create_tree(self):
        idxs = np.random.permutation(len(self.y))[:self.sample_sz]
        f_idxs = np.random.permutation(self.x.shape[1])[:self.n_features]
        return DecisionTree(self.x.iloc[idxs], self.y[idxs], self.n_features, f_idxs,
                    idxs=np.array(range(self.sample_sz)),depth = self.depth, min_leaf=self.min_leaf)
        
    def predict(self, x):
        return np.mean([t.predict(x) for t in self.trees], axis=0)

def std_agg(cnt, s1, s2): return math.sqrt(abs((s2/cnt) - (s1/cnt)**2))

class DecisionTree():
    def __init__(self, x, y, n_features, f_idxs,idxs,depth=10, min_leaf=5):
        self.x, self.y, self.idxs, self.min_leaf, self.f_idxs = x, y, idxs, min_leaf, f_idxs
        self.depth = depth
        self.n_features = n_features
        self.n, self.c = len(idxs), x.shape[1]
        self.val = np.mean(y[idxs])
        self.score = float('inf')
        self.find_varsplit()
        
    def find_varsplit(self):
        for i in self.f_idxs: self.find_better_split(i)
        if self.is_leaf: return
        x = self.split_col
        lhs = np.nonzero(x<=self.split)[0]
        rhs = np.nonzero(x>self.split)[0]
        lf_idxs = np.random.permutation(self.x.shape[1])[:self.n_features]
        rf_idxs = np.random.permutation(self.x.shape[1])[:self.n_features]
        self.lhs = DecisionTree(self.x, self.y, self.n_features, lf_idxs, self.idxs[lhs], depth=self.depth-1, min_leaf=self.min_leaf)
        self.rhs = DecisionTree(self.x, self.y, self.n_features, rf_idxs, self.idxs[rhs], depth=self.depth-1, min_leaf=self.min_leaf)

    def find_better_split(self, var_idx):
        x, y = self.x.values[self.idxs,var_idx], self.y[self.idxs]
        sort_idx = np.argsort(x)
        sort_y,sort_x = y[sort_idx], x[sort_idx]
        rhs_cnt,rhs_sum,rhs_sum2 = self.n, sort_y.sum(), (sort_y**2).sum()
        lhs_cnt,lhs_sum,lhs_sum2 = 0,0.,0.

        for i in range(0,self.n-self.min_leaf-1):
            xi,yi = sort_x[i],sort_y[i]
            lhs_cnt += 1; rhs_cnt -= 1
            lhs_sum += yi; rhs_sum -= yi
            lhs_sum2 += yi**2; rhs_sum2 -= yi**2
            if i<self.min_leaf or xi==sort_x[i+1]:
                continue

            lhs_std = std_agg(lhs_cnt, lhs_sum, lhs_sum2)
            rhs_std = std_agg(rhs_cnt, rhs_sum, rhs_sum2)
            curr_score = lhs_std*lhs_cnt + rhs_std*rhs_cnt
            if curr_score<self.score: 
                self.var_idx,self.score,self.split = var_idx,curr_score,xi

    @property
    def split_name(self): return self.x.columns[self.var_idx]
    
    @property
    def split_col(self): return self.x.values[self.idxs,self.var_idx]

    @property
    def is_leaf(self): return self.score == float('inf') or self.depth <= 0 
    

    def predict(self, x):
        return np.array([self.predict_row(xi) for xi in x])

    def predict_row(self, xi):
        if self.is_leaf: return self.val
        t = self.lhs if xi[self.var_idx]<=self.split else self.rhs
        return t.predict_row(xi)

def main():
    connection = connectDB()
    tuples = runCommand(connection)
    rfregressor = RandomForest(pd.DataFrame(data=[item[3:18] for item in tuples], dtype=float), np.array([item[-1] for item in tuples]).astype(float), 15, 'sqrt', 592)
    pred_scores = rfregressor.predict(np.array([item[3:18] for item in tuples]).astype(float))
    scores_argsort = np.flip(np.argsort(pred_scores))
    retval = "{results:["
    for i in scores_argsort:
    	retval += "{'name':'" + tuples[i][1] + " " + tuples[i][2] + "','position':'" + tuples[i][-4] + "','team':'" + tuples[i][-3] + "','status':'" + tuples[i][-2] + "','cost':" + tuples[i][-5] + "},"
    retval = retval[:-1] + "]}"
    print(retval)

sys.path.insert(0, os.path.dirname(__file__))
if __name__ == '__main__':
	main()

'''
	retval = '{results:['
    for i in scores_argsort:
		retval += '{"name":"' + tuples[i][1] + ' ' + tuples[i][2] + '","position":"' + tuples[i][-4] + '","team":"' + tuples[i][-3] + '","status":"' + tuples[i][-2] + '","points per game":"' + tuples[i][-1] + '"},'
	retval = retval[:-1] + ']}'
	print(retval)
'''
