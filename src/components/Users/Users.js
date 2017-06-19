import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UsersList from './UsersList';
import UserProfile from './UserProfile';

class Users extends React.Component {
  render (){
    return(
      <div>
        <Switch>
          <Route exact path='/users' component={UsersList}/>
          <Route path='/users/profile' component={UserProfile}/>
        </Switch>
      </div>
    )
  }
}

export default Users;
