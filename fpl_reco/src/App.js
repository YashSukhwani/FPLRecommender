import './App.css';
import All from './Components/All';
import Display from './Components/Display';

function App() {
  const stylePage = {
    margin: "10px",
    padding: "10px"
  };

  return (
    <div style={stylePage}>
      <All style={stylePage} />
    </div>
  );

}

export default App;
