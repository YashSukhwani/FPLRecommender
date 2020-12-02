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
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const valueRef1 = useRef('');
  const valueRef2 = useRef('');
  const valueRef3 = useRef('');
  const valueRef4 = useRef('');
  const valueRef5 = useRef('');
  const valueRef6 = useRef('');
  const valueRef7 = useRef('');  
  const valueRef8 = useRef('');

  return (
  <div>
    <Typography variant="h1" component="h2">
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
      <Button variant="contained" color="secondary" onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'post',
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
        }).catch(function (error) {
          console.log(error);
      });
        }}>
        Insert Player</Button>

      <Button variant="contained" color="secondary" onClick={() => {
        
        }}>
        Get Recommendations</Button>

      <Button variant="contained" color="secondary"onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'delete',
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
        }).catch(function (error) {
          console.log(error);
      });
        }}>Delete Player</Button>

      <Button variant="contained" color="secondary"onClick={() => {
        console.log('Hi');
        console.log(valueRef1.current.value);
        axios({
          method: 'update',
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
        }).catch(function (error) {
          console.log(error);
      });
        }}>Update Player</Button>

      <Button variant="contained" color="secondary"onClick={() => {
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
        }).catch(function (error) {
          console.log(error);
      });
        }}>Search Player</Button>
    </div>
    <div>

    <form noValidate autoComplete="off">
      <div>
      <TextField
          id="player-name"
          label="Player Name"
          inputRef={valueRef1}
        />
      <TextField
          id="player-team"
          label="Player Team"
          inputRef={valueRef2}
        />
      </div>
      <div>
        <TextField
          id="stat-name"
          label="Statistic"
          inputRef={valueRef3}
        />
        <TextField
          id="stat-number"
          label="Number"
          type="number"
          inputRef={valueRef4}
        />
      </div>
      <div>
      <TextField
          id="stat-name2"
          label="Statistic 2"
          inputRef={valueRef5}
        />
        <TextField
          id="stat-number2"
          label="Number"
          type="number"
          inputRef={valueRef6}
        />
      </div>
      <div>
      <TextField
          id="stat-name3"
          label="Statistic 3"
          inputRef={valueRef7}
        />
        <TextField
          id="stat-number3"
          label="Number"
          type="number"
          inputRef={valueRef8}
        />
      </div>

    </form>

    </div>
  </div>
  );

}

export default App;
