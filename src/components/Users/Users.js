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
          <Route path='/users/profile' component={UserProfile}/>
          <Route exact name="userdetail" path="/users/:userId" component={UserDetail}/>
        </Switch>
      </div>
    )
  }
}

export default Users;
