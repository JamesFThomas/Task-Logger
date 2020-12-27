// Import React framework and hooks
import React, { useEffect, Fragment } from 'react';
//Import SearchBar component
import SearchBar from './components/layout/SearchBar'
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
    </Fragment>
  );
}

export default App;
