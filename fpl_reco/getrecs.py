import os
import sys
import mysql.connector
from mysql.connector import Error



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
	                                         user='commonUser',
	                                         password='Australia101')
		while not connection.is_connected():
			continue
		return connection
	except Error:
		print('Error while connecting: ', Error)

def runCommand(connection):
	cursor = connection.cursor()
	cursor.execute("select f.player_id, f.first_name, f.last_name, f.goals_scored, f.assists, f.total_points, f.minutes, f.goals_conceded, f.creativity, f.influence, f.threat, f.bonus, f.bps, f.ict_index, f.clean_sheets, f.red_cards, f.yellow_cards, f.selected_by_percent, f.now_cost, f.position, p.team, p.status, p.points_per_game from fpl_indices_stats f join playerStats p on p.name = f.last_name;")
	return cursor.fetchall()

def main():
	connection = connectDB()
	print(runCommand(connection))

sys.path.insert(0, os.path.dirname(__file__))
if __name__ == '__main__':
	main()

