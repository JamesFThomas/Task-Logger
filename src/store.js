// import redux package
import { createStore, applyMiddleware } from 'redux';
// import redux devtools package
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk middleware package
import thunk from 'redux-thunk'
// import root reducer file
import rootReducer from './reducers';

// initialize app level state
const initialState = {};

// initialize middle in array
const middleware = [thunk];

// initialize redux store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;