import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Messages from './Messages.js'
import Login from './Login.js'
import Signup from './Signup.js'
import NavBar from './NavBar.js'


ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/messages' component={Messages} />
    </div>   
  </Router>),
  document.getElementById('root')
);
