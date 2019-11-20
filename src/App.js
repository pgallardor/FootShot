import React from 'react';
import logo from './logo.svg';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Login } from './views/pages';
import './App.css';

function App() {
  return (
    <Router>
      <body>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" render={ props => <Login {...props}/> }/> 
        </Switch>
      </body>
    </Router>
  );
}

export default App;
