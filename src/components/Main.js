import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Users from "./Users/Users";
import Signup from "./Session/Signup";
import Login from "./Session/Login";
import ResetPasswordRequest from "./Session/ResetPasswordRequest";
import ResetPasswordChange from "./Session/ResetPasswordChange";
import BlogFeed from './Blog/BlogFeed';
import ConfirmEmail from './Users/ConfirmEmail'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path = '/users' component={Users}/>
          <Route path = '/signup' component={Signup}/>
          <Route path = '/login' component={Login}/>
          <Route path = '/resetPassword' component={ResetPasswordRequest}/>
          <Route path = '/resetPasswordConfirmation/' component={ResetPasswordChange}/>
          <Route path = '/confirmEmail/' component={ConfirmEmail}/>
          <Route path = '/blog' component={BlogFeed}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
