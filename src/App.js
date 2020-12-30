import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Upload from './upload';
import Home from './route/Home';
import Hearing from './route/Hearing';
import History from './route/History';
import Result from './route/Result';
import Nav from './component/navigation';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <div className="App">
    
     <Router>
        <Nav/>
        <Switch>

          <Route  path="/home" component={Home}/>
          <Route  path="/result" component={Result}/>
          <Route  path="/history" component={History}/>
          <Route  path="/hearing" component={Hearing}/>
        </Switch>
      </Router>
    
    
    </div>
    </React.Fragment>
  );
}

export default App;
