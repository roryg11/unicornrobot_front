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
      this.setState({showEditForm: !this.showEditForm});
    }

    render (){
      let profile;
      let editButton;
      if( this.state.showEditForm ){
        profile = <UserProfileUpdate user={this.state.user}/>;
        editButton = <p>Editing...</p>
      } else {
        profile = <UserProfileRead user={this.state.user}/>
        editButton = <button className="ui button" onClick={this._toggleEdit}>Edit</button>;
      }
      return(
        <div>
          <h1 className="ui header horizontal divider">Your Profile</h1>
          {editButton}
          {profile}
        </div>
      );
    }
}

export default UserProfile;
