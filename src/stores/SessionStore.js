import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import {assign} from 'object-assign';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

// neeed to implement this with JSON web tokesn
