import React from 'react';

class UserProfileRead extends React.Component {
  render (){
    let firstName, lastName, email, bio, jumpFrom, jumpTo, userInterests;
    if(this.props.user){
      firstName = <span>{this.props.user.first_name}</span>;
      lastName = <span>{this.props.user.last_name}</span>;
      email = <span>{this.props.user.email}</span>;
      bio = <span>{this.props.user.bio}</span>;
      jumpFrom = <span>{this.props.user.jump_from}</span>;
      jumpTo = <span>{this.props.user.jump_to}</span>;
      if(this.props.user.interests){
        userInterests = this.props.user.interests.map(function(interest, index){
          return <span key={index}>{interest}, </span>;
        });
      }
    }

    return(

      <div className="ui card centered">
        <div className="content">
          <div className="header">
            <p> {firstName} {lastName}</p>
          </div>
          <div className="float left description">
            <p>Email: {email}</p>
            <p>Bio: {bio}</p>
            <p>Jump From: {jumpFrom}</p>
            <p>Jump To: {jumpTo}</p>
            <p>Interests: {userInterests} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfileRead;
