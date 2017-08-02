import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UsersList from './UsersList';
import UserProfile from './UserProfile';
import UserDetail from './UserDetail';

class Users extends React.Component {
  render (){
    return(
      <div>
        <Switch>
          <Route exact path='/users' component={UsersList}/>
          <Route name="userdetail" path="/users/:userId?" component={UserDetail}/>
          <Route path='/users/profile' component={UserProfile}/>
        </Switch>
      </div>
    )
  }
}

export default Users;
