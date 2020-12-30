import store from "../store"
// Create Initial State for logs
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}


// create reducer to update log state
export default (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}