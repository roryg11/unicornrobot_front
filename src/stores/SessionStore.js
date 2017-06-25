import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import assign from 'object-assign';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

let _email = sessionStorage.getItem('email');
let _accessToken = sessionStorage.getItem('accessToken');
let _errors = [];
let _currentUser;

let SessionStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  getToken: function(){
    return _accessToken;
  },
  getErrors: function(){
    return _errors;
  },
  getCurrentUser: function(){
    return _currentUser;
  }
});

SessionStore.dispatchToken = AppDispatcher.register(function(payload){
  const action = payload.action;
  switch(action.type){
    case ActionTypes.SIGNUP_RESPONSE:
      break;
    case ActionTypes.LOGIN_RESPONSE:
      if(action.json && action.json.access_token){
        _accessToken = action.json.access_token;
        _email = action.json.email;

        // Token will always live in the session so that the API can grab it without hassle
        sessionStorage.setItem('accessToken', _accessToken);
        sessionStorage.setItem('email', _email);
      }
      if(action.errors){
        _errors = action.errors;
      }
      SessionStore.emitChange();
      break;
    case ActionTypes.CURRENT_USER_RESPONSE:
      if(action.json){
        _currentUser = action.json;
      }
      SessionStore.emitChange();
      break;
    case ActionTypes.LOGOUT_RESPONSE:
      _accessToken = null;
      _email = null;
      _currentUser = null;
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('email');
      SessionStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default SessionStore;
