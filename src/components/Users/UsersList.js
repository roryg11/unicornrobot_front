import React from 'react';
import UserStore from '../../stores/UserStore';
import UserActionCreators from '../../actions/UserActionCreators';
import User from './User';
import UnauthorizedNotice from '../Common/UnauthorizedNotice';

function getStateFromStores(){
  return {
    users: UserStore.getAllUsers(),
    errors: []
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
      users: UserStore.getAllUsers(),
      errors: UserStore.getErrors()
    });
  }

  render (){
    let users = this.state.users;
    let apiErrors = this.state.errors;
    let errorMessages;
    let unauthorized;
    if(apiErrors.length){
        if(this.state.errors[0] === "unauthorized"){
          unauthorized = <UnauthorizedNotice/>
        }
    }
    let usersList = users.map(function(user){
      return(
        <tbody className="" key={user.id}>
          <User user={user}/>
        </tbody>
      )
    });
    return (

      <div className="ui centered container">
        <h1>Users List</h1>
        {errorMessages}
        {unauthorized}
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
