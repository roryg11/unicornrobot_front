import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

const ActionTypes = AppConstants.ActionTypes;

const UserActionCreators = {
  loadUsers: function(){
    AppDispatcher.handleViewAction({
      type:ActionTypes.LOAD_USERS
    });

    WebAPIUtils.loadUsers();
  },
  loadUser:function(userId){
    AppDispatcher.handleViewAction({
      type:ActionTypes.LOAD_USER,
      userId: userId
    });

    WebAPIUtils.loadUser(userId);
  },
  signup: function(email, password, password_confirmation, first_name, last_name, username){
    console.log("username in UserActionCreators is:" + username);
    AppDispatcher.handleViewAction({
      type:ActionTypes.SIGNUP_REQUEST,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      first_name: first_name,
      last_name: last_name,
      username: username
    });

    WebAPIUtils.signup(email, password, password_confirmation, first_name, last_name, username);
  }
}

export default UserActionCreators;
