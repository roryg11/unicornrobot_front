import keyMirror from 'keymirror';

// const APIRoot = "http://localhost:3005";
const APIRoot = "https://guarded-thicket-54472.herokuapp.com/";

const AppConstants = {
  APIEndpoints: {
    LOGIN:        APIRoot + '/v1/login',
    REGISTRATION: APIRoot + '/v1/users',
    USERS:        APIRoot + '/v1/users', // might get some issues here
    CURRENT_USER: APIRoot + '/v1/users/current_user',
    LOGOUT:       APIRoot + '/v1/logout',
    INTEREST:    APIRoot + '/v1/interests',
    RESET_PASSWORD: APIRoot + '/v1/password_resets',
    RSS_FEED: APIRoot + '/v1/blog',
    CONFIRM_EMAIL: APIRoot + "/v1/confirmation_email",
    EVENTS: APIRoot + '/v1/events'
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
    CONFIRM_EMAIL_REQUEST: null,
    CONFIRM_EMAIL_RESPONSE: null,
    CURRENT_USER_RESPONSE: null,
    CURRENT_USER_REQUEST: null,
    LOGOUT_REQUEST: null,
    LOGOUT_RESPONSE: null,
    RESET_PASSWORD_REQUEST: null,
    RESET_PASSWORD_RESPONSE: null,
    CHANGE_PASSWORD_WITH_TOKEN_REQUEST: null,
    CHANGE_PASSWORD_WITH_TOKEN_RESPONSE: null,

    // routes
    REDIRECT: null,

    //  users
    LOAD_USERS: null,
    RECEIVE_USERS: null,
    LOAD_USER: null,
    RECEIVE_USER: null,
    CREATE_USER: null,
    RECEIVE_CREATED_USER: null,
    UPDATE_USER_PASSWORD: null,
    DELETE_USER_REQUEST: null,
    CONFIRM_USER_DELETION: null,

    CREATE_INTEREST: null,
    RECEIVE_INTEREST: null,

    // Blog
    RSS_FEED_REQUEST: null,
    RSS_FEED_RESPONSE: null,

    //Events
    EVENTS_REQUEST: null,
    EVENTS_RESPONSE: null
  })
}

export default AppConstants;
