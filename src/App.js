// Import React framework and hooks
import React, { useEffect, Fragment } from 'react';
//Import SearchBar component
import SearchBar from './components/layout/SearchBar'
//Import SearchBar component
import Logs from './components/logs/Logs'
// import AddBtn component
import AddBtn from './components/layout/AddBtn'
// import AddLogModal component
import AddLogModal from './components/logs/AddLogModal'
// import AddLogModal component
import EditLogModal from './components/logs/EditLogModal'
// import AddTechModal component
import AddTechModal from './components/techs/AddTechModal'
// import TechListModal component
import TechListModal from './components/techs/TechListModal'
// Import provider to wrap application and access state
import { Provider } from 'react-redux';
// Import store to access actions and update state
import store from './store'
// Import materialize package
import 'materialize-css/dist/css/materialize.min.css';
// Import JS from materialize package
import M from 'materialize-css/dist/js/materialize.min.js'
// Import local CSS file
import './App.css';

const App = () => {
  // Hook will automatically initialize.invoke functions of component render
  useEffect(()=>{
    // Initialize Materialize JS in application
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
