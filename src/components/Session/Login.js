import React from 'react';
import SessionActionCreators from '../../actions/SessionActionCreators';
import SessionStore from '../../stores/SessionStore';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: []
    };
    this._onChange = this._onChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getInitialState(){
    return{
      errors: []
    }
  }

  componentDidMount (){
    SessionStore.addChangeListener(this._onChange);
  }

  componentWillUnmount (){
    SessionStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState({errors: SessionStore.getErrors()});
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
    SessionActionCreators.login(this.state.email, this.state.password);
  }

  render (){
    return (
      <div className="container">
        <form className="ui form">
          <div className="fields">
            <div className="field">
              <label>Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange}/>
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
          <button className="ui button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
