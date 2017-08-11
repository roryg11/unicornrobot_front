import React from 'react';
import SessionActionCreators from '../../actions/SessionActionCreators';
import SessionStore from '../../stores/SessionStore';


class ResetPassword extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      success: "",
      errors: []
    }
    this._onChange = this._onChange.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._submitResetPasswordRequest = this._submitResetPasswordRequest.bind(this);
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
        success: "Success! Your link has been emailed to you",
      })
    } else {
      this.setState({
        errors: SessionStore.getErrors()
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

  _submitResetPasswordRequest (e){
    e.preventDefault();
    SessionActionCreators.resetPasswordRequest(this.state.email);
  }

  render (){
    let errors = this.state.errors.map(function(error, index){
      return <div className="ui content" key={index}><span className="ui warning message" >{error}</span></div>
    });

    return (
      <div className="ui container">
        <h2 className="ui horizontal divider header">Request to Reset Password</h2>
          {errors}
          <form className = "ui form segment">
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="email" value={this.state.password} onChange={this._handleInputChange}/>
          </div>
          <button className="ui button" onClick={this._submitResetPasswordRequest}>Submit</button>
        </form>
      </div>
    )
  }
}

export default ResetPassword;
