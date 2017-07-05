import React from 'react';
// import SessionStore from '../../stores/SessionStore';
// import SessionActionCreators from '../../actions/SessionActionCreators';
import UserActionCreators from '../../actions/UserActionCreators';
import Interests from '../../constants/Interests';


class UserProfileUpdate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.user.username,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      bio: this.props.user.bio || " ",
      jump_from: this.props.user.jump_from || " ",
      jump_to: this.props.user.jump_to || " "
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  _handleSubmit(e){
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      bio: this.state.bio,
      jump_from: this.state.jump_from,
      jump_to: this.state.jump_to,
      interests: this.state.interests
    }
    UserActionCreators.updateUser(this.props.user.id, user);
  }

  render (){
    const optionsList = Object.keys(Interests).reduce(function(previous, current){
      return 
    }, {})

    return (<div className="ui centered container">
      <form className="ui form">
        <div className="fields">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this._handleInputChange}/>
          </div>
          <div className="field">
            <label>First Name</label>
            <input type="text" name="first_name" placeholder="first name" value={this.state.first_name} onChange={this._handleInputChange}/>
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" name="last_name" placeholder="last name" value={this.state.last_name} onChange={this._handleInputChange}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this._handleInputChange}/>
          </div>
        </div>
        <div className="field">
          <label>Bio</label>
          <textarea name="bio" placeholder="Tell us a little bit about yourself" value={this.state.bio} onChange={this._handleInputChange}/>
        </div>
        <div className="fields">
          <div className="field">
            <label>What did or are you going to jump from?</label>
            <input type="text" name="jump_from" placeholder="What do you do right now?" value={this.state.jump_from} onChange={this._handleInputChange}/>
          </div>
          <div className="field">
            <label>What have you jumped to? Or are looking to jump to?</label>
            <input type="text" name="jump_to" placeholder="What do you want to do?" value={this.state.jump_to} onChange={this._handleInputChange}/>
          </div>
        </div>
        <div className="fields">
          <label>What are your interests?</label>

        </div>
        <button className="ui button" onClick={this._handleSubmit}>Submit</button>
      </form>
    </div>)
  }
}

export default UserProfileUpdate;
