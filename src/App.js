import React from 'react';
import logo from './logo.svg';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Login, Navbar, Patient, PatientSign, Observation } from './views/pages';
import './views/style.css';

function App() {
  return (
    <Router>
      <header>
        {
          true &&
          <Navbar/>
        }
      </header>
      <body>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" render={ props => <Login {...props}/> }/> 
            <Route path="/patient/:id" render={ props => <Patient {...props} /> }/>
            <Route path="/sign-in" render={ props => <PatientSign {...props} /> } />
            <Route path="/observation/:oid" render={ props => <Observation {...props} /> } />
        </Switch>
        <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </Router>
  );
}

export default App;
