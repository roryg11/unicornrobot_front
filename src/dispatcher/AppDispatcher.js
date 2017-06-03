import AppConstants from '../constants/AppConstants';
import {Dispatcher} from 'flux';
import assign from 'object-assign';

const PayloadSources = AppConstants.PayloadSources;

let AppDispatcher = assign(new Dispatcher (), {
  handleServerAction: function(action){
    let payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },
  handleViewAction: function(action){
    let payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

export default AppDispatcher;
