//Import string variables from types to dispatch payload to reducer for state manipulation
import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types'

// ------ Actions ----- //

// Function - GET list of techs from server
export const getTechs = () => async dispatch => {
  try {
    // update state loading attribute to show preloader component
    setLoading();
    // create variable set to return value of fetch to GET logs
    const res = await fetch('/techs');
    // create variable set to json format of returned data
    const data = await res.json();
    //create dispatch object to go to reducer
    dispatch({
       type: GET_TECHS,
       payload: data
    });

  } catch (error) {
    // If any errors occur during request for data
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  };
};

// Function - SET loading attribute value to true
export const setLoading = () =>{
  // dispatch type variable to reducer to id loading update
  return {
    type: SET_LOADING
  }
};