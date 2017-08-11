import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

const ActionTypes = AppConstants.ActionTypes;

const SessionActionCreators = {
  signup: function(email, username, password, passwordConfirmation){
    AppDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebAPIUtils.signup(email, username, password, passwordConfirmation)
  },
  getCurrentUser: function(){
    AppDispatcher.handleViewAction({
      type:ActionTypes.CURRENT_USER_REQUEST,
    });
    WebAPIUtils.getCurrentUser();
  },
  login: function(email, password){
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  },
  logout: function(){
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
    WebAPIUtils.logout();
  },
  resetPasswordRequest: function(email){
    AppDispatcher.handleViewAction({
      type: ActionTypes.RESET_PASSWORD_REQUEST,
      email: email
    });

    WebAPIUtils.resetPasswordRequest(email);
  },
  changePasswordWithToken: function(password, password_confirmation, password_reset_token){
    AppDispatcher.handleViewAction({
      type: ActionTypes.RESET_PASSWORD_WITH_TOKEN_REQUEST,
      password: password,
      password_confirmation: password_confirmation,
      password_reset_token: password_reset_token
    });
    WebAPIUtils.changePasswordWithToken(password, password_confirmation, password_reset_token);
  }
}

export default SessionActionCreators;
