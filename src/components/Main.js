import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Users from "./Users/Users";
import Signup from "./Session/Signup";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path = '/users' component={Users}/>
          <Route path = '/signup' component={Signup}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
