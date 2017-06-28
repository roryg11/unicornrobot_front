import React from 'react';
import { Link } from 'react-router-dom';
import SessionStore from '../stores/SessionStore';
import SessionActionCreators from '../actions/SessionActionCreators';

function getStateFromStores (){
  return {
    token: SessionStore.getToken(),
    user: SessionStore.getCurrentUser(),
    errors: SessionStore.getErrors()
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
      user: SessionStore.getCurrentUser(),
      errors: SessionStore.getErrors()
    })
  }

  _handleLogout (e){
    e.preventDefault();
    SessionActionCreators.logout();
  }

  render() {
    let rightMenu;

    if(!this.state.user){
      rightMenu = <div className="right menu"><Link to="/login" className="ui item">Login</Link><Link to="/signup" className="ui item">Signup</Link></div>;
    } else {
      rightMenu = <div className="right menu"><Link to="/users/profile" className="item">Profile</Link> <a className="ui item" onClick={this._handleLogout}>Logout</a></div>
    }
    return (
      <div className="ui stackable secondary pointing menu">
        <Link to="/users" className="item">User Directory</Link>
        <a className="item">Events</a>
        <a className="item">Blog</a>
        {rightMenu}
      </div>

    );
  }
}
export default Header;
