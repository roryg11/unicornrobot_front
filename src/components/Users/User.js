import React from 'react';
import {Link} from 'react-router-dom';

class User extends React.Component {

  render (){
    let userInterests = <span>None Listed</span>;
    let userLink = "/users/" + this.props.user.id;
    if(this.props.user.interests.length){
      userInterests = this.props.user.interests.map(function(interest, index){
        return <span key={index}>{interest}, </span>;
      });
    }
    return(<tr>
            <td>
              <span>{this.props.user.first_name} </span>
              <span>{this.props.user.last_name}</span>
              <Link to={{ pathname: userLink, state: this.props.user}}> >> </Link>
            </td>
            <td>
              <span>{this.props.user.jump_from}</span> => <span>{this.props.user.jump_to}</span>
            </td>
            <td>
                {userInterests}
            </td>
            <td>
              <span>{this.props.user.email}</span>
            </td>
      </tr>)
  }
}

export default User;
