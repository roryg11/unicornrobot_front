import React from 'react';
import {Link} from 'react-router-dom';


class UnauthorizedNotice extends React.Component {
  render (){
    return (
      <div className="ui container content">
        <h2 className="ui header">You need to be logged in to view this page. Please login</h2>
        <Link to="/login">Click here to login</Link>
      </div>
    )
  }
}

export default UnauthorizedNotice;
