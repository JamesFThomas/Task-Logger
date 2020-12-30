// IMport React Package and hooks
import React, { useEffect } from 'react'
// import connect package to link redux to our application
import { connect } from 'react-redux';
// import LogItem component
import LogItem from './LogItem'
// import PreLoader component
import Preloader from '../layout/Preloader'
//Import Proptypes packages
import PropTypes from 'prop-types';
// Import actions from logsActions
import { getLogs } from '../../actions/logActions'

// Logs component
      // passing log as prop, destructor attributes from props to be used/displayed in component
const Logs = ({ log: { logs, loading}, getLogs }) => {

  useEffect(()=>{
    // fetch logs on component render
    getLogs();
    // eslint-disable-next-line
  },[]);

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
          <p className='center'> No Logs Returned</p>
        ) : (
          // If logs returned map through logs array and render each in own LogItem component
          logs.map(log => <LogItem key={log.id} log={log}/>)
        )}
    </ul>
  )
}

// Create Proptypes requirement for component
Logs.protoTypes = {
  log: PropTypes.object.isRequired,
}


// create function to copy and dispatch information to reducer from state
const mapStateToProps = state => ({
  // create attribute and set to state variable you want to send to reducer
  log: state.log
})

// export component with connect function
export default connect(mapStateToProps, { getLogs })(Logs);
