import React from 'react';
// import {Router, Link} from 'react-router-dom';
// import {ReactPropTypes} from 'react';
// import WebAPIUtils from '../../utils/WebAPIUtils';
import UserStore from '../../stores/UserStore';
import UserActionCreators from '../../actions/UserActionCreators';
import User from './User';

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
        <User user={user}/>
      )
    })

    return (

      <div className="centered container">
        <h1>Users List</h1>
        <button>Add User</button>
        <div className="ui one column centered grid">
            <div className="column">
              {usersList}
            </div>
        </div>
      </div>
    )
  }
}

export default UsersList;
