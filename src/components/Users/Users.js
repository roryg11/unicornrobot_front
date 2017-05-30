import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UsersList from './UsersList';
import UserProfile from './UserProfile';

class Users extends React.Component {
  render (){
    return(
      <div>
        <h2> This is the Users page</h2>
        <Switch>
          <Route exact path='/users' component={UsersList}/>
          <Route path='/users/:id' component={UserProfile}/>
        </Switch>
      </div>
    )
  }
}

export default Users;
