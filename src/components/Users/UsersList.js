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
      return(
      <li className="ui grid">
        <div className="column four wide">
          <span>{user.first_name}</span> <span>{user.last_name}</span>
        </div>
        <div className="column four wide">
          <span>{user.jump_from}</span> => <span>{user.jump_to}</span>
        </div>
        <div className="column four wide">
          <span>Interests:  </span>
          <span>{user.interests}</span>
        </div>
      </li>)
    })

    return (

      <div className="container">
        <h1>Users List</h1>
        <button>Add User</button>
        <ul>
          <li className="ui grid">
            <div className="column four wide">
              <span>Name</span>
            </div>
            <div className="column four wide">
              <span>Jumping from ___ to ___</span>
            </div>
            <div className="column four wide">
              <span>Interests</span>
            </div>
          </li>
          {usersList}
        </ul>
      </div>
    )
  }
}

export default UsersList;
