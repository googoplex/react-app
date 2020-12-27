import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Upload from './upload';
import Home from './route/Home';
import Hearing from './route/swertresHearing';
import History from './route/swertresHistory';


function App() {
  return (
    <div className="App">
     <h1>Pendut.Ph</h1>
     <Home/>
     <Hearing/>
     <History/>
     {/* <Upload/> */}
    
    </div>
  );
}

export default App;
