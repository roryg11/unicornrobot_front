import React from 'react';
// import UserStore from '../../stores/UserStore';
import UserActionCreators from '../../actions/UserActionCreators';

class Signup extends React.Component {
  constructor (){
    super();
    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      bio: "",
      jump_from: "",
      jump_to: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit (e){
    e.preventDefault();
    UserActionCreators.signup(this.state.email, this.state.password, this.state.password_confirmation, this.state.first_name, this.state.last_name, this.state.username);
  }


  render (){
    return (
      <div className="ui container">
        <form className="ui form">
          <div className="fields">
            <div className="field">
              <label>Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange}/>
            </div>
            <div className="field">
              <label>First Name</label>
              <input type="text" name="first_name" placeholder="first name" value={this.state.first_name} onChange={this.handleInputChange}/>
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" name="last_name" placeholder="last name" value={this.state.last_name} onChange={this.handleInputChange}/>
            </div>
            <div className="field">
              <label>Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange}/>
            </div>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
          </div>
          <div className="field">
            <label>Password Confirmation</label>
            <input type="password" name="password_confirmation" placeholder="password confirmation" value={this.state.password_confirmation} onChange={this.handleInputChange}/>
          </div>
          <button className="ui button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Signup;
