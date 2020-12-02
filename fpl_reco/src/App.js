import logo from './logo.svg';
import { render } from 'react-dom';
import { Drawer } from '@material-ui/core';
import ClippedDrawer from './Components/Nav/ClippedDrawer';

import './App.css';
import All from './Components/All';

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
