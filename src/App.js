import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import { Home, Login, Navbar, Patient, PatientSign, Observation, CardObservation, Admin } from './views/pages';
import './views/style.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    let user = {
      role: ['unloaded'],
      username: 'unloaded'
    }
    this.state = { user }

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount(){
    axios.get('/auth/amilogged', { withCredentials: true })
    .then(response => {
        let user_data = response.data;
        console.log(user_data);
        if (user_data.logged)
            this.login(user_data.user);
        else
            this.setState({user: { role: ['guest'], username: 'guest' }});
    })
  }

  //front-end login
  login(userInfo){
    let { username, role } = userInfo;
    let user = { role: ['guest', role], username };

    this.setState({ user });
  }

  logout(){
      let user = { role: ['guest'],
          username: 'guest' };

      this.setState({ user });
  }

  render(){
    if (this.state.user.username === 'unloaded') return (<h2>Loading...</h2>)
    const PrivateRoute = ({ component: Component, ...rest}) => (
      <Route {...rest} render={ props => (
        this.state.user.username !== 'guest' 
        ? <Component {...props}/>
        : <Redirect to='/login'/>
      )} />
    )
    return (
      <Router>
        <header>
            <Navbar user={this.state.user} logout={this.logout}/>
        </header>
        <body>
          <Switch>
              <PrivateRoute exact path="/" component={Home}/>
              <Route path="/login" component={ props => <Login {...props} login={this.login} user={this.state.user}/> }/> 
              <Route path="/admin" component={ props => <Admin user={this.state.user}/> } />
              <PrivateRoute path="/patient/:id" component={Patient}/>
              <PrivateRoute path="/sign-patient" component={PatientSign} />
              <PrivateRoute path="/observation/:oid" component={Observation} />
          </Switch>
          <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </Router>
    );
  }
}

export default App;
