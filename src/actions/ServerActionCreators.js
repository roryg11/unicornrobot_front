import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
// import WebAPIUtils from '../utils/WebAPIUtils';

const ActionTypes = AppConstants.ActionTypes;

const ServerActionCreators = {
  receiveSignup: function(json, errors){
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_USER,
      json: json,
      errors: errors
    });
  },
  receiveLogin: function(json, errors){
    AppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },
  receiveLogout: function(json, errors){
    AppDispatcher.handleServerAction({
      type: ActionTypes.LOGOUT_RESPONSE,
      json: json,
      errors: errors
    });
  },
  receiveUsers: function(json, errors){
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_USERS,
      json: json,
      errors: errors
    });
  },
  receiveUser: function(json, errors){
    AppDispatcher.handleServerAction({
      type:ActionTypes.RECEIVE_USER,
      json: json,
      errors: errors
    });
  },
  receiveCurrentUser: function(json, errors){
    AppDispatcher.handleServerAction({
      type: ActionTypes.CURRENT_USER_RESPONSE,
      json: json,
      errors: errors
    });
  },
  receiveInterest: function(json, errors){
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_INTEREST,
      json: json,
      errors: errors
    });
  }
};

export default ServerActionCreators;
