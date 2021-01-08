// Import React Package and hooks
import React, { useEffect} from 'react';
//IMport connect package
import { connect } from 'react-redux';
// Import Proptypes packages
import PropTypes from 'prop-types';
// Import LogItem component
import LogItem from './LogItem'
// Import logActions folder
import { searchLogs, clearSearch } from '../../actions/logActions';

const SearchedLogsModal = ({ log:{ loading, searched }, searchLogs, clearSearch }) => {

  useEffect(()=>{
    searchLogs();
  },[ searchLogs ])

  const closeModal = () =>{
    clearSearch();
  };

  return (
    < div id='searched-logs-modal' className='modal'>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'> Searched Logs </h4>
        </li>
         {/* { searched !== null && (
            searched.map(log => <p key={log._id} log={log}></p>)
          ) } */}
          { !loading && !searched ? (
          <li className='center'> No Logs Match Your Search...</li>
        ) : (
          // If logs returned map through logs array and render each in own LogItem component
          searched.map(log => <LogItem key={log._id} log={log}/>)
        )}
      </ul>
      <div className='modal-footer'>
        <a href="#!" className='btn-flat waves-blue modal-close' onClick={closeModal}> Close Search </a>
      </div>
    </div>
  )
}

// Require data type for props passed ot component
SearchedLogsModal.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  searchLogs: PropTypes.func.isRequired,
  log: PropTypes.object.isRequired,
}

// create function to copy and dispatch information to reducer from state
const mapStateToProps = state => ({
  // create attribute and set to state variable you want to send to reducer
  log: state.log
})

// export connection function with component to access/manipulate application state via redux store
export default connect(mapStateToProps, { searchLogs, clearSearch })(SearchedLogsModal);
