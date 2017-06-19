import React from 'react';

class UserProfileRead extends React.Component {
  render (){
    let firstName, lastName, email, bio, jumpFrom, jumpTo;
    if(this.props.user){
      firstName = <span>{this.props.user.first_name}</span>;
      lastName = <span>{this.props.user.last_name}</span>;
      email = <span>{this.props.user.email}</span>;
      bio = <span>{this.props.user.bio}</span>;
      jumpFrom = <span>{this.props.user.jump_from}</span>;
      jumpTo = <span>{this.props.user.jump_to}</span>
    }
    return(
      <div>
        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Bio: {bio}</p>
          <p>Jump From: {jumpFrom}</p>
          <p>Jump To: {jumpTo}</p>
        </div>
      </div>
    )
  }
}

export default UserProfileRead;
