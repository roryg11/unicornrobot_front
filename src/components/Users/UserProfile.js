import React from 'react';
import UserStore from '../../stores/UserStore';
import UserActionCreators from '../../actions/UserActionCreators';


function getStateFromStores(){
  return {
    user: UserStore.getUser()
  }
}

class UserProfile extends React.Component {
    constructor (props){
      super(props);
      this.state = getStateFromStores();
      this._onChange - this._onChange.bind(this);
    }

    componentDidMount(){
        UserStore.addChangeListener(this._onChange);
        UserActionCreators.loadUser();
    }

    componentWillUnmount(){
      UserStore.removeChangeListener(this._onChange);
    }

    _onChange(){
      this.setState({
        user: UserStore.getUser()
      })
    }

    render (){
      return(
        <div>
          <div>User Profile Page</div>
          <div>{this.state.user}</div>
        </div>
      );
    }
}

export default UserProfile;
