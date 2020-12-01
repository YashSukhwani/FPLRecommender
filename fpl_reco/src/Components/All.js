import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useRef, Component } from 'react';
import '../App.css';

function All() {

    const myStyle = {
        margin: "5px",
        padding: "5px"
    };

    const textStyle = {
        color: "Brown",
        fontFamily: "Times New Roman"
    };

    const playerName = useRef('');
    const teamName = useRef('');
    const position = useRef('');

    const stat2 = useRef('');
    const stat2Val = useRef('');
    const stat3 = useRef('');  
    const stat3Val = useRef('');

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
    axios({
      method: 'post',
      url: 'http://fplrecommender.web.illinois.edu/insert',
      headers: {}, 
      data: {
         playerName: playerName.current.value, 
         teamName: teamName.current.value,
         position: position.current.value,
      }
    }).catch(function (error) {
      console.log(error);
  });
    }}>
    Insert Player</Button>

    <Button style={myStyle} variant="contained" color="secondary"onClick={() => {
    axios({
      method: 'get',
      url: 'http://fplrecommender.web.illinois.edu/fulltable',
      headers: {}, 
      data: {
      }
    }).catch(function (error) {
      console.log(error);
  });
    }}>FullTable</Button>

<Button style={myStyle} variant="contained" color="secondary"onClick={() => {
    axios({
      method: 'get',
      url: 'http://fplrecommender.web.illinois.edu/getBest',
      headers: {}, 
      data: {
      }
    }).catch(function (error) {
      console.log(error);
  });
    }}>getBest</Button>

<Button style={myStyle} variant="contained" color="secondary"onClick={() => {
    axios({
      method: 'get',
      url: 'http://fplrecommender.web.illinois.edu/getBetterthanAvg',
      headers: {}, 
      data: {
      }
    }).catch(function (error) {
      console.log(error);
  });
    }}>getBetterthanAvg</Button>

  <Button style={myStyle} variant="contained" color="secondary"onClick={() => {
    axios({
      method: 'delete',
      url: 'http://fplrecommender.web.illinois.edu/delete',
      headers: {}, 
      data: {
         playerName: playerName.current.value, 
      }
    }).catch(function (error) {
      console.log(error);
  });
    }}>Delete Player</Button>

  <Button style={myStyle} variant="contained" color="secondary"onClick={() => {
    axios({
      method: 'put',
      url: 'http://fplrecommender.web.illinois.edu/updateTeam',
      headers: {}, 
      data: {
         playerName: playerName.current.value, 
         statValue: teamName.current.value,
      }
    }).catch(function (error) {
      console.log(error);
  });
    }}>Update Team</Button>

  <Button style={myStyle} variant="contained" color="secondary"onClick={() => { // Button Not Working, Implement It
    axios({
      method: 'get',
      url: '',
      headers: {}, 
      data: {
         playerName: playerName.current.value, 
         teamName: teamName.current.value,
         stat1: position.current.value,
         stat2: stat2.current.value,
         stat2Val: stat2Val.current.value,
         stat3: stat3.current.value,
         stat3Val: stat3Val.current.value
      }
    }).catch(function (error) {
      console.log(error);
  });
    }}>Search Player</Button>

<Button style={myStyle} variant="contained" color="secondary"onClick={() => {
    axios({
      method: 'get',
      url: 'http://fplrecommender.web.illinois.edu/...', // Edit this URL for Shrikar
      headers: {}
    }).catch(function (error) {
      console.log(error);
  });
    }}>Get Top Players</Button>

</div>
<div>

<form noValidate autoComplete="off">
  <div>
  <TextField style={myStyle}
      id="player-name"
      label="Player Name"
      inputRef={playerName}
    />
  <TextField style={myStyle}
      id="player-team"
      label="Player Team"
      inputRef={teamName}
    />
    <TextField style={myStyle}
      id="position"
      label="Position"
      inputRef={position}
    />
  </div>
  <div>
  <TextField style={myStyle}
      id="stat-name2"
      label="Statistic 2"
      inputRef={stat2}
    />
    <TextField style={myStyle}
      id="stat-number2"
      label="Number"
      type="number"
      inputRef={stat2Val}
    />
  </div>
  <div>
  <TextField style={myStyle}
      id="stat-name3"
      label="Statistic 3"
      inputRef={stat3}
    />
    <TextField style={myStyle}
      id="stat-number3"
      label="Number"
      type="number"
      inputRef={stat3Val}
    />
  </div>
</form>
</div>
</div>
    );
}

export default All;