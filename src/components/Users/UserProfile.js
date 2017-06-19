import React from 'react';
import SessionStore from '../../stores/SessionStore';
import SessionActionCreators from '../../actions/SessionActionCreators';
import UserProfileRead from './UserProfileRead';



function getStateFromStores(){
  return {
    token: SessionStore.getToken(),
    user: SessionStore.getCurrentUser()
    }
}

class UserProfile extends React.Component {
    constructor (props){
      super(props);
      this.state = getStateFromStores();
      this._onChange = this._onChange.bind(this);
    }

    componentDidMount(){
        SessionStore.addChangeListener(this._onChange);
        SessionActionCreators.getCurrentUser();
    }

    componentWillUnmount(){
      SessionStore.removeChangeListener(this._onChange);
    }

    _onChange(){
      this.setState({
        token: SessionStore.getToken(),
        user: SessionStore.getCurrentUser()
      });
    }

    render (){
      return(
        <div>
          <div>User Profile Page</div>
          <UserProfileRead user={this.state.user}/>
        </div>
      );
    }
}

export default UserProfile;
