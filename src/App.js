import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Upload from './upload';
import Home from './route/Home';
import Hearing from './route/Hearing';
import History from './route/History';
import Nav from './component/navigation';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <h1>Pendut.Ph</h1>
     <Router>
       <Switch>
     <Nav/>
     <Route  path="/home" component={Home}/>
     <Route  path="/history" component={History}/>
     <Route  path="/hearing" component={Hearing}/>
      </Switch>
      </Router>
     {/* <Home/>
     <Hearing/>
     <History/> */}
     {/* <Upload/> */}
    
    </div>
  );
}

export default App;
