import React from 'react';
import UserStore from '../../stores/UserStore';
import UserActionCreators from '../../actions/UserActionCreators';

function getStateFromStores(){
  return {
    user: UserStore.getUser(),
    errors: []
  };
}

class UserDetail extends React.Component {
  constructor(props){
    super();
    this.state =  getStateFromStores();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount (){
    let userId = this.props.location.pathname.split("/")[2];
    UserStore.addChangeListener(this._onChange);
    UserActionCreators.loadUser(userId);
  }

  componentWillUnmount (){
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState({
      user: UserStore.getUser(),
      errors: UserStore.getErrors()
    });
  }
  render (){
    return(

      <div className="ui card centered">
        <div className="content">
          <div className="header">
            <p> {this.state.user.first_name} {this.state.user.last_name}</p>
          </div>
          <div className="float left description">
            <p>Email: {this.state.user.email}</p>
            <p>Bio: {this.state.user.bio}</p>
            <p>Jump From: {this.state.user.jump_from}</p>
            <p>Jump To: {this.state.user.jump_to}</p>
            <p>Interests: {this.state.user.interests} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetail;
