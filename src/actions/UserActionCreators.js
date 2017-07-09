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
  signup: function(email, password, password_confirmation, first_name, last_name){
    AppDispatcher.handleViewAction({
      type:ActionTypes.SIGNUP_REQUEST,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      first_name: first_name,
      last_name: last_name
    });

    WebAPIUtils.signup(email, password, password_confirmation, first_name, last_name);
  },
  updateUser: function(id, user){
    AppDispatcher.handleViewAction({
      type: ActionTypes.UPDATE_USER_REQUEST,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      bio: user.bio,
      jump_from: user.jump_from,
      jump_to: user.jump_to
    });

    WebAPIUtils.updateUser(id, user);
  },
  changePassword: function(id, user){
    AppDispatcher.handleViewAction({
      type:ActionTypes.UPDATE_USER_PASSWORD,
      current_password: user.current_password,
      new_password: user.new_pasword
    });

    WebAPIUtils.updateUser(id, user);
  }
}

export default UserActionCreators;
