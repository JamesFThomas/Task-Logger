                                                           // ----- rootReducer ----- //

// Import combinerReducer function to link all application reducers to store
import { combineReducers } from 'redux';
// import logReducer to access/update app state referencing task logs
import logReducer from './logReducer'
// import techReducer to access/update app state referencing technicians who attend to logs
import techReducer from './techReducer'


// export object with all reducers for application state
export default combineReducers({
  log: logReducer,
  tech: techReducer
});