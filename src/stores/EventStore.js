import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import assign from 'object-assign';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

let _events = [];
let _errors = [];

let EventStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  getEvents: function(){
    return _events;
  },
  getErrors: function(){
    return _errors;
  }
});

EventStore.dispatchToken = AppDispatcher.register(function(payload){
  const action = payload.action;
  switch(action.type){
    case ActionTypes.EVENTS_RESPONSE:
    if(action.json){
      _events = action.json;
    }

    if(action.errors || action.error){
      _errors = action.errors || action.error;
    }

    EventStore.emitChange();
    break;
  default:
    break;
  }

  return true;
});

export default EventStore;
