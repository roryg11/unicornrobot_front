import ServerActionCreators from '../actions/ServerActionCreators';
import AppConstants from '../constants/AppConstants';
import request from 'superagent';

const APIEndpoints = AppConstants.APIEndpoints;
let errorMsgs = ["An error has a occurred. Please try again, or contact your administrator"];
let json;

let _getErrors= function (res){
  json = JSON.parse(res.text);
  if(json){
    if(json['errors']){
      errorMsgs = json['errors'];
    } else if (json['error']){
      errorMsgs = [json['error']];
    }
  }
}

const WebAPIUtils = {
  signup: function(email, username,password,passwordConfirmation){
    request.post(APIEndpoints.REGISTRATION)
    .send({
      user: {
        email: email,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      }
    })
    .set('Accept', 'application/json')
    .end((error, res) =>{
      if(res) {
        if(res.error){
          var errorMsgs = _getErrors(res);
          ServerActionCreators.receiveLogin(null, errorMsgs);
        } else {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveLogin(json, null);
        }
      }
    });
  },
  login: function(email, password){
    request.post(APIEndpoints.LOGIN)
    .send({username: email, password: password, grant_type: 'password'})
    .set('Accept', 'application/json')
    .end((error, res)=>{
      if(res){
        if(res.error){
          var errorMsgs = _getErrors(res);
          ServerActionCreators.receiveLogin(null, errorMsgs);
        } else {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveLogin(json, null);
        }
      }
    })
  },
  loadUsers: function(){
    return request.get(APIEndpoints.USERS)
    .set('Authorization', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .end((error, res)=>{
      if(res){
        json = JSON.parse(res.text);
        ServerActionCreators.receiveUsers(json);
      }
    })
  },
  loadUser: function(userId){
    request.get(APIEndpoints.USERS + '/' + userId)
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .end((error, res)=>{
      if(res){
        json = JSON.parse(res.text);
        ServerActionCreators.receiveUser(json);
      }
    })
  }
}

export default WebAPIUtils;
