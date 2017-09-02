import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

const ActionTypes = AppConstants.ActionTypes;

const EventActionCreators = {
  getEvents: function (){
    AppDispatcher.handleViewAction({
      type: ActionTypes.EVENTS_REQUEST
    });

    WebAPIUtils.getEvents();
  }
}

export default EventActionCreators;
