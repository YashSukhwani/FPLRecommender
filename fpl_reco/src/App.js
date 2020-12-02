import logo from './logo.svg';
import { render } from 'react-dom';
import { Drawer } from '@material-ui/core';
import ClippedDrawer from './Components/Nav/ClippedDrawer';

import './App.css';
import axios from 'axios';
import React, { useRef, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';

// import './Components/Dashboard/Dashboard'
// import './Components/Nav/ClippedDrawer'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

function App() {
  const myStyle = {
    margin: "5px",
    padding: "5px"
};

const textStyle = {
    color: "Brown",
    fontFamily: "Times New Roman"
};

const theStyle = {
  marginTop: "30px"
}

  const valueRef1 = useRef('');
  const valueRef2 = useRef('');
  const valueRef3 = useRef('');
  const valueRef4 = useRef('');
  const valueRef5 = useRef('');
  const valueRef6 = useRef('');
  const valueRef7 = useRef('');  
  const valueRef8 = useRef('');

  const player1 = useRef('');
  const player2 = useRef('');
  const player3 = useRef('');
  const player4 = useRef('');
  const player5 = useRef('');
  const player6 = useRef('');
  const player7 = useRef('');
  const player8 = useRef('');
  const player9 = useRef('');
  const player10 = useRef('');
  const player11 = useRef('');
  const player12 = useRef('');
  const player13 = useRef('');
  const player14 = useRef('');
  const player15 = useRef('');

  return (
  <div>
    <Typography style={textStyle} variant="h1" component="h2">
      The FPL Recommender
    </Typography>
    <Typography variant="h4" component="h5">
      Usage rules
    </Typography>
    <div>
    <Typography variant="h5" component="h6">
      Team Name or Player Name to be used in Search and Delete. 
    </Typography>
    </div>
    <div>
    <Typography variant="h5" component="h6">
      Statistics and Player Name used in Insert and Update.
    </Typography>
    </div>
    <div>
    <Typography variant="h5" component="h6">
      Must provide at least one statistic in these two functions.
    </Typography>
    </div>
    <div>
      <Button style={myStyle} variant="contained" color="secondary" onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'post',
          url: 'http://fplrecommender.web.illinois.edu/insert',
          headers: {}, 
          data: {
             playerName: valueRef1.current.value, 
             teamName: valueRef2.current.value,
             position: valueRef3.current.value,
          }
        }).then((res) => {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
      });
        }}>
        Insert Player</Button>

        <Button style={myStyle} variant="contained" color="secondary"onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'get',
          url: 'http://fplrecommender.web.illinois.edu/fulltable',
          headers: {}, 
          data: {
          }
        }).then((res) => {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
      });
        }}>Full Table</Button>

<Button style={myStyle} variant="contained" color="secondary"onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'get',
          url: 'http://fplrecommender.web.illinois.edu/getBest',
          headers: {}, 
          data: {
          }
        }).then((res) => {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
      });
        }}>get Best</Button>

<Button style={myStyle} variant="contained" color="secondary"onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'get',
          url: 'http://fplrecommender.web.illinois.edu/getBetterthanAvg',
          headers: {}, 
          data: {
          }
        }).then((res) => {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
      });
        }}>get Better than Avg</Button>

      <Button style={myStyle} variant="contained" color="secondary"onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'delete',
          url: 'http://fplrecommender.web.illinois.edu/delete',
          headers: {}, 
          data: {
             playerName: valueRef1.current.value, 
          }
        }).then((res) => {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
      });
        }}>Delete Player</Button>

      <Button style={myStyle} variant="contained" color="secondary"onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'put',
          url: 'http://fplrecommender.web.illinois.edu/updateTeam',
          headers: {}, 
          data: {
             playerName: valueRef1.current.value, 
             statValue: valueRef2.current.value,
          }
        }).then((res) => {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
      });
        }}>Update Team</Button>

<Button style={myStyle} variant="contained" color="secondary"onClick={() => {
    axios({
      method: 'get',
      url: 'http://fplrecommender.web.illinois.edu/getRecs', // Edit this URL for Shrikar
      headers: {}
    }).then((res) => {
      console.log(res);
    }).catch(function (error) {
      console.log(error);
  });
    }}>Get Recommendations</Button>

      <Button style={myStyle} variant="contained" color="secondary"onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'get',
          url: '',
          headers: {}, 
          data: {
             playerName: valueRef1.current.value, 
             teamName: valueRef2.current.value,
             stat1: valueRef3.current.value,
             stat1Val: valueRef4.current.value,
             stat2: valueRef5.current.value,
             stat2Val: valueRef6.current.value,
             stat3: valueRef7.current.value,
             stat3Val: valueRef8.current.value
          }
        }).then((res) => {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
      });
        }}>Search Player</Button>
    </div>
    <div>

    <form noValidate autoComplete="off">
      <div>
      <TextField style={myStyle}
          id="player-name"
          label="Player Name"
          inputRef={valueRef1}
        />
      <TextField style={myStyle}
          id="player-team"
          label="Player Team"
          inputRef={valueRef2}
        />
        <TextField style={myStyle}
          id="position"
          label="Position"
          inputRef={valueRef3}
        />
      </div>
      <div>
        <TextField style={myStyle}
          id="stat-number"
          label="Number"
          type="number"
          inputRef={valueRef4}
        />
      </div>
      <div>
      <TextField style={myStyle}
          id="stat-name2"
          label="Statistic 2"
          inputRef={valueRef5}
        />
        <TextField style={myStyle}
          id="stat-number2"
          label="Number"
          type="number"
          inputRef={valueRef6}
        />
      </div>
      <div>
      <TextField style={myStyle}
          id="stat-name3"
          label="Statistic 3"
          inputRef={valueRef7}
        />
        <TextField style={myStyle}
          id="stat-number3"
          label="Number"
          type="number"
          inputRef={valueRef8}
        />
      </div>
      <div>
      <Typography style={textStyle} variant="h1" component="h2">
      Enter Your Team Below
    </Typography>
      </div>
        <div style={theStyle}>
        <TextField style={myStyle}
          label="Player Name"
          inputRef={player1}
        />
                <TextField style={myStyle}
          label="Player Name"
          inputRef={player2}
        />
                <TextField style={myStyle}
          label="Player Name"
          inputRef={player3}
        />
                <TextField style={myStyle}
          label="Player Name"
          inputRef={player4}
        />
                <TextField style={myStyle}
          label="Player Name"
          inputRef={player5}
        />
                <TextField style={myStyle}
          label="Player Name"
          inputRef={player6}
        />
                <TextField style={myStyle}
          label="Player Name"
          inputRef={player7}
        />
                <TextField style={myStyle}
          label="Player Name"
          inputRef={player8}
        />
                <TextField style={myStyle}
          label="Player Name"
          inputRef={player9}
        />
                <TextField style={myStyle}
          label="Player Name"
          inputRef={player10}
        />
                        <TextField style={myStyle}
          label="Player Name"
          inputRef={player11}
        />
                        <TextField style={myStyle}
          label="Player Name"
          inputRef={player12}
        />
                        <TextField style={myStyle}
          label="Player Name"
          inputRef={player13}
        />
                        <TextField style={myStyle}
          label="Player Name"
          inputRef={player14}
        />
                        <TextField style={myStyle}
          label="Player Name"
          inputRef={player15}
        />
        <Button style={myStyle} variant="contained" color="secondary"onClick={() => {
    axios({
      method: 'post',
      url: 'http://fplrecommender.web.illinois.edu/playerTeam', // Edit this URL for Shrikar
      headers: {},
      data: {
        player1: player1.current.value,
        player2: player2.current.value,
        player3: player3.current.value,
        player4: player4.current.value,
        player5: player5.current.value,
        player6: player6.current.value,
        player7: player7.current.value,
        player8: player8.current.value,
        player9: player9.current.value,
        player10: player10.current.value,
        player11: player11.current.value,
        player12: player12.current.value,
        player13: player13.current.value,
        player14: player14.current.value,
        player15: player15.current.value,
      }
    }).catch(function (error) {
      console.log(error);
  });
    }}>Submit Team</Button>
        </div>
    </form>

    </div>
  </div>
  );

}

export default App;
