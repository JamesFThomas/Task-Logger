// Import react framework
import React, { useState } from 'react';
//IMport connect package
import { connect } from 'react-redux';
// Import prop-types package
import PropTypes from 'prop-types';
// Import logAction functionality pass in as prop to component
import { searchLogs, clearSearch } from '../../actions/logActions'

const SearchBar = ({ searchLogs, clearSearch }) => {
  // Initialize userEf hook to grab text from search field
  // const text = useRef('');
  const [text, setText] = useState('')

  // Function to grab the values typed into search bar
  const handleChange= (e) =>{
    setText(e.target.value);
  }

  // Function - Invoked to when input field changes state, captures inputted values
  const submitQuery = () => {
    // Invoke searchLogs with text ref value as query string for JSON API search of persisted logs
    searchLogs(text);
    setText('');
  };

  return (
    <nav style={ {marginBottom: '30px'}} className='blue'>
    <div className="nav-wrapper">
      <form >
        <div className="input-field">
          <input id="search" type="search" placeholder='Search Logs...' value={text} onChange={handleChange} required />
          <label className="label-icon" htmlFor="search">
            <a href='#searched-logs-modal' className='modal-trigger' onClick={submitQuery}>
              <i className="material-icons">search</i>
            </a>
          </label>
            <i href="#!" className="material-icons" onClick={() => clearSearch()}>close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

// create prop types requirements object
SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
}

// create function to copy and dispatch information to reducer from state
const mapStateToProps = state => ({
  // create attribute and set to state variable you want to send to reducer
  searched: state.searched
})

// export connection function with component to access/manipulate application state via redux store
export default connect(mapStateToProps, { searchLogs, clearSearch })(SearchBar);