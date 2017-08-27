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
            let errorMsgs = _getErrors(res);
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
  },
  deleteUser: function(id){
    request.delete(APIEndpoints.USERS + "/" + id)
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .end((error, res) => {
      if(res.error){
        let errorMsgs = _getErrors(res);
        ServerActionCreators.receiveCurrentUser(null, errorMsgs);
      } else {
        json = JSON.parse(res.text);
        ServerActionCreators.confirmDeletion(json);
      }
    })
  },
  resetPasswordRequest: function(email){
    request.post(APIEndpoints.RESET_PASSWORD)
    .send({email: email})
    .set('Accept', 'application/json')
    .end((error, res) => {
      if(res.error){
        let errorMsgs = _getErrors(res);
        ServerActionCreators.confirmResetPassword(null, errorMsgs);
      } else {
        json = JSON.parse(res.text);
        ServerActionCreators.confirmResetPassword(json);
      }
    });
  },
  changePasswordWithToken: function(password, password_confirmation, password_reset_token){
    request.put(APIEndpoints.RESET_PASSWORD + "/" + password_reset_token)
    .send({
      password: password,
      password_confirmation: password_confirmation,
      password_reset_token: password_reset_token
    }).set('Accept', 'application/json')
    .end((error, res) => {
      if(res.error){
        let errorMsgs = _getErrors(res);
        ServerActionCreators.changePasswordWithToken(null, errorMsgs);
      } else {
        json = JSON.parse(res.text)
        ServerActionCreators.changePasswordWithToken(json);
      }
    });
  },
  getRSSFeed: function(){
    request.get(APIEndpoints.RSS_FEED)
    .end((err, res) => {
      if(res.error || res.errors){
        let errors = _getErrors(res);
        ServerActionCreators.receiveRSSFeed(null, errors);
      } else {
        let apiStream = JSON.parse(res.text);
        ServerActionCreators.receiveRSSFeed(apiStream.apis);
      }
    })
  },
  confirmEmail: function(token){
    request.post(APIEndpoints.CONFIRM_EMAIL + "/" + token)
    .end((err, res) => {
      if(res.error || res.errors){
        let errors = _getErrors(res)
        ServerActionCreators.receiveEmailConfirmation(null, errors)
      } else {
        let activationStatus = JSON.parse(res.text)
        ServerActionCreators.receiveEmailConfirmation(activationStatus)
      }
    })
  }
}

export default WebAPIUtils;
