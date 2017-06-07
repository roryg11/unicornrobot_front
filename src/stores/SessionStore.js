import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import {assign} from 'object-assign';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

let _session = {}
let _token = "";

let SessionStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeChangeListener(CHANGE_EVENT, callback)
  },
  getSession: function(){
    return _session;
  },
  getToken: function(){
    return _token;
  }
});

SessionStore.dispatchToken = AppDispatcher.register(function(payload){
  const action = payload.action;
  switch(action.type){
    case ActionTypes.RECEIVE_SIGNUP_RESPONSE:
      break;
    case ActionTypes.RECEIVE_LOGIN_RESPONSE:
    
  }
});

// neeed to implement this with JSON web tokesn
