// Import react framework
import React, { useRef } from 'react';
//IMport connect package
import { connect } from 'react-redux';
// Import prop-types package
import PropTypes from 'prop-types';
// Import logAction functionality pass in as prop to component
import { searchLogs } from '../../actions/logActions'

const SearchBar = ({ searchLogs }) => {
  // Initialize userEf hook to grab text from search field
  const text = useRef('');

  // Function - Invoked to when input field changes state, captures inputted values
  const onChange = (e) => {
    // Invoke searchLogs with text ref value as query string for JSON API search of persisted logs
    searchLogs(text.current.value);
  }

  return (
    <nav style={ {marginBottom: '30px'}} className='blue'>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" placeholder='Search Logs...' ref={text} onChange={onChange} required />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

// create prop types requirements object
SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}

// export connection function with component to access/manipulate application state via redux store
export default connect(null, { searchLogs })(SearchBar);