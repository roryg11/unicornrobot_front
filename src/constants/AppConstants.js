import keyMirror from 'keymirror';

const devAPIRoot = "http://localhost:3005";
const APIRoot = "https://guarded-thicket-54472.herokuapp.com/";

const AppConstants = {
  APIEndpoints: {
    LOGIN:        APIRoot + '/v1/login',
    REGISTRATION: APIRoot + '/v1/users',
    USERS:        APIRoot + '/v1/users', // might get some issues here
    CURRENT_USER: APIRoot + '/v1/users/current_user',
    LOGOUT:       APIRoot + '/v1/logout',
    INTEREST:    APIRoot + '/v1/interests'
  },
  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),
  ActionTypes: keyMirror({
    // session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,
    SIGNUP_REQUEST: null,
    SIGNUP_RESPONSE: null,
    CURRENT_USER_RESPONSE: null,
    CURRENT_USER_REQUEST: null,
    LOGOUT_REQUEST: null,
    LOGOUT_RESPONSE: null,

    // routes
    REDIRECT: null,

    LOAD_USERS: null,
    RECEIVE_USERS: null,
    LOAD_USER: null,
    RECEIVE_USER: null,
    CREATE_USER: null,
    RECEIVE_CREATED_USER: null,
    UPDATE_USER_PASSWORD: null,

    CREATE_INTEREST: null,
    RECEIVE_INTEREST: null
  })
}

export default AppConstants;
