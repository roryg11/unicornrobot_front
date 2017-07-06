import React from 'react';
// import UserStore from '../../stores/UserStore';
// import UserActionCreators from '../../actions/UserActionCreators';

class User extends React.Component {
  // constructor (props){
  //   super(props);
  // }

  render (){
    let userInterests = <span>None Listed</span>;
    if(this.props.user.interests.length){
      userInterests = this.props.user.interests.map(function(interest){
        return <li key={interest.id}>{interest.description} </li>;
      });
    }

    return(<tr>
            <td>
              <span>{this.props.user.first_name} </span>
              <span>{this.props.user.last_name}</span>
            </td>
            <td>
              <span>{this.props.user.jump_from}</span> => <span>{this.props.user.jump_to}</span>
            </td>
            <td>
              <span>Interests:  </span>
              <ul>
                {userInterests}
              </ul>
            </td>
            <td>
              <span>Contact Me:</span> <span>{this.props.user.email}</span>
            </td>
      </tr>)
  }
}

export default User;
