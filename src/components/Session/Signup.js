import React from 'react';
import UserStore from '../../stores/UserStore';
import UserActionCreators from '../../actions/UserActionCreators';
// import SessionStore from '../../stores/SessionStore';
function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
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
      jump_to: "",
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this._onSignupChange = this._onSignupChange.bind(this);

  }

  componentDidMount (){
    UserStore.addChangeListener(this._onSignupChange);
    this.setState({errors:UserStore.getErrors()});
  }

  componentWillUnmount (){
    UserStore.removeChangeListener(this._onSignupChange);
  }

  _onSignupChange (){
    let errors = UserStore.getErrors();
    this.setState({errors: errors});
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
    if(this.state.password !== this.state.password_confirmation){
      this.setState({errors: ["passwords do not match"]});
      return;
    }

    UserActionCreators.signup(
      this.state.email,
      this.state.password,
      this.state.password_confirmation,
      this.state.first_name,
      this.state.last_name,
      this.state.username);

  }


  render (){
    let errorMessages;
    if(this.state.errors.length){
      errorMessages = this.state.errors.map(function(errorMsg, index){
        return(<div className="ui danger message">
          <span key={index}>{errorMsg} </span>
        </div>);
      });
    }
    return (
      <div className="ui container content">
        <h1 className="ui header">Sign up with When to Jump</h1>
        {errorMessages}
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
