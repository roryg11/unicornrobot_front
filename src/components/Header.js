import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/users" className="item">User Directory</Link>
        <Link to="/users/:id" className="item">Profile</Link>
        <a className="item">Events</a>
        <a className="item">Blog</a>
        <div className="right menu">
          <Link to="/signup" className="ui item">Signup / Login</Link>
          <a className="ui item">Account</a>
          <a className="ui item">Logout</a>
        </div>
      </div>

    );
  }
}
export default Header;
