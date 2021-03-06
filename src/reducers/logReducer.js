//Import string variables from types to dispatch payload to reducer for state manipulation
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
  CLEAR_SEARCH
} from '../actions/types'


// Create Initial State for logs
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
  searched: []
}


// create reducer to update log state
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch(action.type){
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
      case ADD_LOG:
        return {
          ...state,
          logs: [action.payload, ...state.logs],
          loading: false
        };
      case DELETE_LOG:
        return {
          ...state,
          logs: state.logs.filter(log => log._id !== action.payload),
          loading: false
        };
      case UPDATE_LOG:
        return {
          ...state,
          logs: [action.payload, ...state.logs.filter(log => log._id !== action.payload._id)]
          // logs: state.logs.map(log => log._id === action.payload.id ? action.payload : log)
        };
      case SEARCH_LOGS:
        return {
          ...state,
          searched: action.payload
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case CLEAR_SEARCH:
        return {
          ...state,
          searched: []
        };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return{
          ...state,
          error: action.payload
        };
    default:
      return state;
  }
}