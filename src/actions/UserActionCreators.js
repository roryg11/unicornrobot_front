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
  }
}

export default UserActionCreators;
