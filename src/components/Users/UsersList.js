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
        <tbody className="" key={user.id}>
          <User user={user}/>
        </tbody>
      )
    });

    return (

      <div className="ui centered">
        <h1>Users List</h1>
        <button>Add User</button>
        <table className="ui celled stackable table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Jump</th>
              <th>Interests</th>
              <th>Contact</th>
            </tr>
          </thead>
          {usersList}
        </table>
      </div>
    )
  }
}

export default UsersList;
