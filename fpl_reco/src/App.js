import logo from './logo.svg';
import { render } from 'react-dom';
import { Drawer } from '@material-ui/core';
import ClippedDrawer from './Components/Nav/ClippedDrawer';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';


// import './Components/Nav/ClippedDrawer'
import All from './Components/All';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

function App() {
  const stylePage = {
    margin: "100",
    padding: "100"
  };

  return (
    <All style={stylePage} />
  );

}

export default App;
