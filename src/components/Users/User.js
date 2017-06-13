import React from 'react';
// import UserStore from '../../stores/UserStore';
// import UserActionCreators from '../../actions/UserActionCreators';

class User extends React.Component {
  // constructor (props){
  //   super(props);
  // }

  render (){
    return(<div className="ui centered fluid card">
            <div className="content">
              <div className="header">
                <span>{this.props.user.first_name} </span>
                <span>{this.props.user.last_name}</span>
              </div>
              <div className="meta">
                <span>{this.props.user.jump_from}</span> => <span>{this.props.user.jump_to}</span>
              </div>
              <div className="description">
                <span>Interests:  </span>
                <span>{this.props.user.interests}</span>
              </div>
            </div>
            <div className="extra content">
              <span>Contact Me:</span> <span>{this.props.user.email}</span>
            </div>
      </div>)
  }
}

export default User;
