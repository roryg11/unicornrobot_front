import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

const ActionTypes = AppConstants.ActionTypes;

const ServerActionCreators = {
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
      type:ActionTypes.RECEIVE_USER,
      json: json
    });
  }
};

export default ServerActionCreators;
