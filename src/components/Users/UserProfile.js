import React from 'react';
import SessionStore from '../../stores/SessionStore';
import SessionActionCreators from '../../actions/SessionActionCreators';
import UserProfileRead from './UserProfileRead';
import UserProfileUpdate from './UserProfileUpdate';


function getStateFromStores(){
  return {
    token: SessionStore.getToken(),
    user: SessionStore.getCurrentUser(),
    showEditForm: false
    }
}

class UserProfile extends React.Component {
    constructor (props){
      super(props);
      this.state = getStateFromStores();
      this._onChange = this._onChange.bind(this);
      this._toggleEdit = this._toggleEdit.bind(this);
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

    _toggleEdit(){
      console.log("IN THE TOGGLE EDIT FORM");
      this.setState({showEditForm: !this.showEditForm});
    }

    render (){
      let profile;
      if( this.state.showEditForm ){
        profile= <UserProfileUpdate user={this.state.user}/>
      } else {
        profile = <UserProfileRead user={this.state.user}/>
      }
      return(
        <div>
          <div>User Profile Page</div>
          <button className="ui button" onClick={this._toggleEdit}>Edit</button>
          {profile}
        </div>
      );
    }
}

export default UserProfile;
