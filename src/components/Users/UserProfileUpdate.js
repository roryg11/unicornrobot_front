import React from 'react';
// import SessionStore from '../../stores/SessionStore';
// import SessionActionCreators from '../../actions/SessionActionCreators';
import UserActionCreators from '../../actions/UserActionCreators';
import InterestActionCreators from '../../actions/InterestActionCreators';
import Interests from '../../constants/Interests';


class UserProfileUpdate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.user.username || "",
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      bio: this.props.user.bio || " ",
      jump_from: this.props.user.jump_from || " ",
      jump_to: this.props.user.jump_to || " ",
      interests: this.props.user.interests || [],
      newInterests: [],
      password: "",
      password_confirmation: ""
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSelectValueChange = this._handleSelectValueChange.bind(this);
    this._handleSubmitInterestsChange = this._handleSubmitInterestsChange.bind(this);
    this._deleteInterest = this._deleteInterest.bind(this);
    this._submitPasswordChange = this._submitPasswordChange.bind(this);
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
      jump_to: this.state.jump_to
    }
    UserActionCreators.updateUser(this.props.user.id, user);
  }

  _handleSelectValueChange(e){
    let unsavedInterests = this.state.newInterests;
    let newInterest = {
      user_id: this.props.user.id,
      description: e.target.value
    };
    unsavedInterests.push(newInterest);
    this.setState({newInterests: unsavedInterests});
  }

  _handleSubmitInterestsChange(e){
    e.preventDefault();
    for(let i=0; i < this.state.newInterests.length; i ++){
      InterestActionCreators.createInterest(this.state.newInterests[i]);
    }
  }

  _submitPasswordChange(e){
    e.preventDefault();
    const userWithPassword = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };
    UserActionCreators.changePassword(this.props.user.id, userWithPassword)
  }

  _deleteInterest(e){
    e.preventDefault();
    return;
  }

  render (){
    let optionsArr = Object.keys(Interests);
    let optionsList = optionsArr.map(function(key){
      return <option key={Interests[key]} value={Interests[key]}>{Interests[key]}</option>
    });

    optionsList.unshift(<option key="0" value="">Select an interest</option>)
    let currentInterests = this.state.interests.map(function(interest){
      return <p key={interest.id}>{interest.description}</p>;
    });
    let newInterests = this.state.newInterests.map(function(interest, index){
      return <p key={index}>{interest.description}</p>;
    });

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
        <button className="ui button" onClick={this._handleSubmit}>Submit</button>
      </form>

      <h3 className="ui horizontal divider header">Add your interests</h3>
      <div className="fields">
        <label>What are your interests?</label>
        {currentInterests}
        {newInterests}
        <select value="" onChange={this._handleSelectValueChange}>
          {optionsList}
        </select>
        <button className="ui button" onClick={this._handleSubmitInterestsChange}>Update Interests</button>
      </div>

      <div className="content ui form">
        <h3 className="ui horizontal divider header">Change Your Password</h3>
        <div className="field">
          <label>New Password</label>
          <input type="password" name="password" placeholder="New Password" value={this.state.password} onChange={this._handleInputChange}/>
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this._handleInputChange}/>
        </div>
        <button className="ui button" onClick={this._submitPasswordChange}>Change Password</button>
      </div>
    </div>)
  }
}

export default UserProfileUpdate;
