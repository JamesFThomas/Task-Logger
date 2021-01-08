// Import React Package and hooks
import React, { useEffect } from 'react'
// Import connect package to link redux to our application
import { connect } from 'react-redux';
// Import LogItem component
import LogItem from './LogItem'
// Import PreLoader component
import Preloader from '../layout/Preloader'
// Import Proptypes packages
import PropTypes from 'prop-types';
// Import actions from logsActions
import { getLogs } from '../../actions/logActions'

// Logs component
      // passing log as prop, destructor attributes from props to be used/displayed in component
const Logs = ({ log: { logs, loading}, getLogs }) => {

  useEffect(()=>{
   // obj.a();
    getLogs();
    // eslint-disable-next-line
  }, [ logs ]);

  // check for loading attribute
  if(loading || logs === null){
    // if true display Preloader component
    return < Preloader/>
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'> System Logs </h4>
      </li>
      {/* Conditionally render loading message if no logs returned*/}
        { !loading && !logs.length ? (
          <p className='center'> No Logs To Display...</p>
        ) : (
          // If logs returned map through logs array and render each in own LogItem component
          logs.map(log => <LogItem key={log._id} log={log}/>)
        )}
    </ul>
  )
}

// Create Proptypes requirement for component
Logs.protoTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
}


// create function to copy and dispatch information to reducer from state
const mapStateToProps = state => ({
  // create attribute and set to state variable you want to send to reducer
  log: state.log
})

// export component with connect function
export default connect(mapStateToProps, { getLogs })(Logs);
