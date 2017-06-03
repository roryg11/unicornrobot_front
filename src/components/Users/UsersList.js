import React from 'react';
// import {Router, Link} from 'react-router-dom';
// import {ReactPropTypes} from 'react';
// import WebAPIUtils from '../../utils/WebAPIUtils';
import UserStore from '../../stores/UserStore';
import UserActionCreators from '../../actions/UserActionCreators';

function getStateFromStores(){
  return {
    users: UserStore.getAllUsers()
  };
}

class UsersList extends React.Component {
  constructor () {
    super();
    this.state =  getStateFromStores();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount (){
    UserStore.addChangeListener(this._onChange);
    UserActionCreators.loadUsers();
  }

  componentWillUnmount (){
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState({
      users: UserStore.getAllUsers()
    });
  }

  render (){
    let users = this.state.users;
    let usersList = users.map(function(user){
      return <li><p>{user.first_name}</p><p>{user.last_name}</p></li>
    })

    return (

      <div>
        <h1>Users List</h1>
        <ul>
          {usersList}
        </ul>
      </div>
    )
  }
}

export default UsersList;
