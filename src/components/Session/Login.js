import React from 'react';
import SessionActionCreators from '../../actions/SessionActionCreators';
import SessionStore from '../../stores/SessionStore';
import {Redirect} from 'react-router-dom'


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: undefined,
      username: "",
      email: "",
      password: "",
      errors: [],
      success: ""
    };
    this._onChange = this._onChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        errors: []
      })
    } else {
      this.setState({
        errors: SessionStore.getErrors(),
        token: SessionStore.getToken()
      });
    }
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
    let errors = this.state.errors.map(function(error, index){
      return <div className="ui content" key={index}><span className="ui warning message" >{error}</span></div>
    });
<<<<<<< HEAD
    let successMsg
    if(this.state.success){
      successMsg = <div className="ui success message">{this.state.success}</div>;
    }
    return (
      <div className="ui container">
        <h2 className="ui horizontal divider header">Login</h2>
        {errors}
        {successMsg}
        <form className="ui form segment">
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange}/>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
          </div>
          <button className="ui button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
=======
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
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange}/>
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
>>>>>>> 843626c2b0ca87c861e4ee0da6a8eca5662343f0
  }
}

export default Login;
