import ServerActionCreators from '../actions/ServerActionCreators';
import AppConstants from '../constants/AppConstants';
import request from 'superagent';

const APIEndpoints = AppConstants.APIEndpoints;
let errorMsgs;
let json;

let _getErrors= function (res){
  let errorMsgs = [];
  if (res.statusCode === 500){
    errorMsgs = [res.statusText];
  } else {
    json = JSON.parse(res.text);
    if(json){
      if(json.errors){
        errorMsgs = json.errors;
      } else if (json.error){
        errorMsgs = [json.error];
      }
    }
  }
  return errorMsgs;
}

const WebAPIUtils = {
  signup: function(email, password, password_confirmation, first_name, last_name){
    request.post(APIEndpoints.REGISTRATION)
    .send({
      user: {
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password,
        password_confirmation: password_confirmation
      }
    })
    .set('Accept', 'application/json')
    .end((error, res) =>{
      if(res) {

        if(res.error){
          errorMsgs = _getErrors(res);
          ServerActionCreators.receiveSignup(null, errorMsgs);
        } else {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveSignup(json, null);
        }
      }
    });
  },
  login: function(email, password){
    request.post(APIEndpoints.LOGIN)
    .send({email: email, password: password, grant_type: 'password'})
    .set('Accept', 'application/json')
    .end((error, res)=>{
      if(res){
        if(res.error){
          errorMsgs = _getErrors(res);
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
        if(res.error){
          let errorMsgs = _getErrors(res);
          ServerActionCreators.receiveUsers(null, errorMsgs);
        } else {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveUsers(json, null);
        }
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
  },
  updateUser: function(id, user){
    request.put(APIEndpoints.USERS + '/' + id)
    .send({user: user})
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .end((error, res) => {
      if(res){
        console.log(res);
        json = JSON.parse(res.text);
        ServerActionCreators.receiveUser(json);
      }
    });
  },
  getCurrentUser: function(){
    request.get(APIEndpoints.CURRENT_USER)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end((error, res)=>{
        if(res){
          if(res.error){
            let errorsMsgs = _getErrors(res);
            ServerActionCreators.receiveCurrentUser(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveCurrentUser(json);
          }
        }
      });
  },
  logout: function(){
    request.delete(APIEndpoints.LOGOUT)
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .end((error, res) => {
      if(res){
        json = JSON.parse(res.text);
        ServerActionCreators.receiveLogout(json);
      }
    });
  },
  changePassword: function(id, user){
    request.put(APIEndpoints.USERS + '/' + id)
    .send({user: user})
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .end((error, res) => {
      if(res){
        json = JSON.parse(res.text);
        ServerActionCreators.receiveUser(json);
      }
    });
  }
}

export default WebAPIUtils;
