import keyMirror from 'keymirror';

const APIRoot = "http://localhost:3005";

const AppConstants = {
  APIEndpoints: {
    LOGIN:        APIRoot + '/v1/login',
    REGISTRATION: APIRoot + '/v1/users',
    USERS:        APIRoot + '/v1/users', // might get some issues here
    CURRENT_USER: APIRoot + '/v1/users/current_user'
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
    LOGOUT: null,

    // routes
    REDIRECT: null,

    LOAD_USERS: null,
    RECEIVE_USERS: null,
    LOAD_USER: null,
    RECEIVE_USER: null,
    CREATE_USER: null,
    RECEIVE_CREATED_USER: null
  })
}

export default AppConstants;
