import React from 'react';
import SignUp from './components/login/SignUp';
import SignIn from './components/login/SignIn';
import Home from './components/Home';
import '../static/css/App.css';
import { Switch, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile';


var App = React.createClass({
  apiKey: '87dfa1c669eea853da609d4968d294be',
  getInitialState: function() {
    return {searchTerm:"", searchUrl:""};
  },
  
  render: function() {
    return (
      <div id="main">
        <Main />     
      </div>
    );
  }
});

//Main
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/my-profile' component={UserProfile}/>
    </Switch>
  </main>
)

export default App;
