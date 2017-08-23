import React from 'react';
import SessionActionCreators from '../../actions/SessionActionCreators';
import SessionStore from '../../stores/SessionStore';


class ResetPasswordChange extends React.Component {
  constructor(props){
    super(props);
    let location = this.props.location.pathname.split("/");
    this.state = {
      password: "",
      password_confirmation: "",
      password_reset_token: location[location.length -1],
      success: "",
      errors: []
    }
    this._onChange = this._onChange.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._submitPasswordChange = this._submitPasswordChange.bind(this);
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
        errors: [],
        success: "Success! Password Change",
      })
    } else {
      this.setState({
        success: "",
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

  _submitPasswordChange(e){
    e.preventDefault();
    SessionActionCreators.changePasswordWithToken(this.state.password, this.state.password_confirmation, this.state.password_reset_token);
  }

  render (){
    let errors;
    if(this.state.errors.length){
      errors = this.state.errors.map(function(error, index){
        return <div className="ui content" key={index}><span className="ui warning message" >{error}</span></div>
      });
    }

    return (
      <div className="ui container">
      {errors}
        <h2 className="ui horizontal divider header">Change Password</h2>
        <form>
        <div className="segment content ui form">
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
        </form>
      </div>
    )
  }
}

export default ResetPasswordChange;
