//Import string variables from types to dispatch payload to reducer for state manipulation
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
} from '../actions/types'


// Create Initial State for logs
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
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
          logs: [...state.logs, action.payload],
          loading: false
        };
      case DELETE_LOG:
        return {
          ...state,
          logs: state.logs.filter(log => log.id !== action.payload),
          loading: false
        }
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