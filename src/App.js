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
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <AddTechModal />
        <EditLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
