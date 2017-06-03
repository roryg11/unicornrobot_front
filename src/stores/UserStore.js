import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import assign from 'object-assign';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

let _users = [];
let _errors = [];
let _user = {email: ""};

let UserStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  },
  getAllUsers: function(){
    return _users;
  },
  getUser: function(){
    return _user;
  },
  getErrors: function(){
    return _errors;
  }
});

UserStore.dispatchToken = AppDispatcher.register(function(payload){
  const action = payload.action;
  switch(action.type){
    case ActionTypes.RECEIVE_USERS:
      _users = action.json.users;
      UserStore.emitChange();
      break;
    case ActionTypes.RECEIVE_CREATED_USER:
      if(action.json){
        _users.unshift(action.json.user);
        _errors = [];
      }
      if(action.errors) {
        _errors = action.errors;
      }

      UserStore.emitChange();
      break;
    case ActionTypes.RECEIVE_USER:
      if(action.json){
        _user = action.json.user;
        _errors = [];
      }

      if(action.errors){
        _errors = action.errors;
      }

      UserStore.emitChange();
      break;
    default:
      return true;
  }
});
export default UserStore;
