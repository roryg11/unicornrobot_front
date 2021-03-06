import React from 'react';
import SessionActionCreators from '../../actions/SessionActionCreators';
import SessionStore from '../../stores/SessionStore';
import {Redirect, Link} from 'react-router-dom';



class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: undefined,
      username: "",
      email: "",
      password: "",
      token: "",
      errors: [],
      success: ""
    };
    this._onChange = this._onChange.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount (){
    SessionStore.addChangeListener(this._onChange);
  }

  componentWillUnmount (){
    SessionStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    if(this.state.errors.length === 0 && this.state.email){
      this.setState({
        success: "Success!",
        username: "",
        email: "",
        password: "",
        errors: [],
        token: SessionStore.getToken()
      });
    } else {
      this.setState({
        errors: SessionStore.getErrors(),
        token: SessionStore.getToken()
      });
    }
  }

  _handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  _handleSubmit (e){
    e.preventDefault();
    SessionActionCreators.login(this.state.email, this.state.password);
  }

  render (){
    let errors = this.state.errors.map(function(error, index){
      return <div className="ui content" key={index}><span className="ui warning message" >{error}</span></div>
    });
    if(this.state.token){
      return (<Redirect to={{pathname: '/home', state: {from: this.props.location} }}/>)
    } else {
      return (
        <div className="ui container">
          <h2 className="ui horizontal divider header">Login</h2>
          {errors}
          <form className="ui form segment">
            <div className="field">
              <label>Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this._handleInputChange}/>
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this._handleInputChange}/>
            </div>
            <button className="ui button" onClick={this._handleSubmit}>Submit</button>
          </form>
          <Link to="/resetPassword">Forgot Password?</Link>
        </div>
      )
    }
  }
}

export default Login;
