// This file contains all actions for updating stat of logs in application

//Import string variables from types to dispatch payload to reducer for state manipulation
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
} from './types'

// Function - GET logs from DB file

/*                          getLogs version 1
  export const getLogs = () =>{
    // use thunk package to make async call
    return async (dispatch) => {
      // update loading attribute
      setLoading();

      // create variable set to return value of fetch to GET logs
      const res = await fetch('/logs');
      // create variable set to json format of returned data
      const data = await res.json();

      //create dispatch object to go to reducer
      dispatch({
        type: GET_LOGS,
        payload: data
      });
    };
  };
*/

// Function - GET logs from json server
export const getLogs = () => async dispatch => {
  try {
    // update state loading attribute to show preloader component
    setLoading();
    // create variable set to return value of fetch to GET logs
    const res = await fetch('/logs');
    // create variable set to json format of returned data
    const data = await res.json();
    //create dispatch object to go to reducer
    dispatch({
       type: GET_LOGS,
       payload: data
    });

  } catch (error) {
    // If any errors occur during request for data
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
}

// Function - updates the loading state attribute to true (loading default set to false)
export const setLoading = () =>{
  // dispatch type variable to reducer to id loading update
  return {
    type: SET_LOADING
  }
};

// Function - Add a log to task log
export const addLog = (log) => async dispatch =>{
  try {
    // update state loading attribute to show preloader component
    setLoading();
    // create variable set to return value of fetch to GET logs
      // include options object
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    // create variable set to json format of returned data
    const data = await res.json();
    //create dispatch object to go to reducer
    dispatch({
       type: ADD_LOG,
       payload: data
    });

  } catch (error) {
    // If any errors occur during request for data
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
}

// Function - DELETE a log from json server
export const deleteLog = (id) => async dispatch => {
  try {
    // update state loading attribute to show preloader component
    setLoading();
    // await response from fetch request, delete method
    await fetch(`/logs/${id}`,{
      method: 'DELETE',
    });

    //create dispatch object to go to reducer, with type and payload to update state
    dispatch({
       type: DELETE_LOG,
       payload: id
    });

  } catch (error) {
    // If any errors occur during request for data
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
}