import React from 'react';
import UserActionCreators from '../../actions/UserActionCreators';
import UserStore from '../../stores/UserStore';


class ConfirmEmail extends React.Component {
  constructor(props){
    super(props);
    let location = this.props.location.pathname.split("/");
    this.state = {
      activated: false,
      token: location[location.length -1],
      errors: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount (){
    let token = this.state.token;
    UserActionCreators.confirmEmail(token);
  }

  _onChange (){
    this.setState({activated: UserStore.getActivation(), erorrs: UserStore.getErrors()});
  }
  render (){
    let message;
    let errorMsgs;
    if(this.state.activated){
      message = <div><span className="ui success message">Your account has been successfully activated, please click to login</span></div>
    } else if (this.state.errors.length){
      errorMsgs = this.state.errors.map(function(err){
        return <li>{err}</li>;
      })
      message = <div><span className="ui warning message"><ul> {errorMsgs} </ul></span></div>
    } else {
      message = <div><span className="ui warning message">Could not process the request</span></div>
    }
    return (
      <div className="ui container">
        <br/>
        {message}
      </div>
    )
  }
}

export default ConfirmEmail;
