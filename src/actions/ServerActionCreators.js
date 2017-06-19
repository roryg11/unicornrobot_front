import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
// import WebAPIUtils from '../utils/WebAPIUtils';

const ActionTypes = AppConstants.ActionTypes;

const ServerActionCreators = {
  receiveSignup: function(json, errors){
    AppDispatcher.handleServerAction({
      type: ActionTypes.SIGNUP_RESPONSE,
      json: json,
      errors: errors
    })
  },
  receiveLogin: function(json, errors){
    AppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },
  receiveUsers: function(json, errors){
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_USERS,
      json: json
    });
  },
  receiveUser: function(json, errors){
    AppDispatcher.handleServerAction({
      type:ActionTypes.CURRENT_USER_RESPONSE,
      json: json
    });
  },
};

export default ServerActionCreators;
