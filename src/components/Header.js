import React from 'react';
import { Link } from 'react-router-dom';
import SessionStore from '../stores/SessionStore';
import SessionActionCreators from '../actions/SessionActionCreators';

function getStateFromStores (){
  return {
    token: SessionStore.getToken(),
    user: SessionStore.getCurrentUser()
  }
}

class Header extends React.Component {
  constructor (){
    super();
    this.state = getStateFromStores();
    this._handleLogout = this._handleLogout.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    SessionStore.addChangeListener(this._onChange);
    SessionActionCreators.getCurrentUser();
  }

  componentWillUnmount (){
      SessionStore.removeChangeListener(this._onChange)
  }

  _onChange(){
    this.setState({
      token: SessionStore.getToken(),
      user: SessionStore.getCurrentUser()
    })
  }

  _handleLogout (e){
    e.preventDefault();
    SessionActionCreators.logout();
  }

  render() {
    let sessionStateLink;
    if(!this.state.user){
      console.log("no session/user");
      sessionStateLink = <Link to="/login" className="ui item">Login</Link>
    } else {
      console.log("user/session found")
      sessionStateLink = <a className="ui item" onClick={this._handleLogout}>Logout</a>
    }
    return (
      <div className="ui stackable secondary pointing menu">
        <Link to="/users" className="item">User Directory</Link>
        <Link to="/users/profile" className="item">Profile</Link>
        <a className="item">Events</a>
        <a className="item">Blog</a>
        <div className="right menu">
          <Link to="/signup" className="ui item">Signup</Link>
          {sessionStateLink}
        </div>
      </div>

    );
  }
}
export default Header;
