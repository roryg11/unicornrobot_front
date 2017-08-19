import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import assign from 'object-assign';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

let _feed = {};
let _errors = {};

let BlogStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  getFeed: function(){
    return _feed;
  },
  getErrors: function(){
    return _errors;
  }
});

BlogStore.dispatchToken = AppDispatcher.register(function(payload){
  const action = payload.action;
  switch(action.type){
    case ActionTypes.RSS_FEED_RESPONSE:
    console.log("IN THE RSS FEED RESPONSE");
    console.log(action);
      if(action.json){
        _feed = action.json;
      }
      if(action.errors || action.error){
        _errors = action.errors || action.error;
      }
      BlogStore.emitChange();
      break;
    default:

      break;
  }
  return true;
});

export default BlogStore;
