import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

const ActionTypes = AppConstants.ActionTypes;

const InterestActionCreators = {
  createInterest: function(interest){
    AppDispatcher.handleViewAction({
      type:ActionTypes.CREATE_INTEREST,
      interest: interest
    });

    WebAPIUtils.createInterest(interest);
  },
  deleteInterest: function(interestId){
    return;
  }
}

export default InterestActionCreators;
