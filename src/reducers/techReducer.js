// Import string variables from types to dispatch payload to reducer for state manipulation
import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from '../actions/types'

// Create Initial state for techs object
const initialState = {
  techs: null,
  loading: false,
  error: null
}

// Export Reducer function to update application state regarding technicians
export default (state = initialState, action) => {
  switch(action.type){
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}