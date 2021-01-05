// import react package and hooks to use in component
import React from 'react';
// import moment package to include date
import Moment from 'react-moment'
// Import connect package from react redux to connect o store actions and update state
import { connect } from 'react-redux';
// import prop types package
import PropTypes from 'prop-types'
// Import logActions functions
import { deleteLog, setCurrent } from '../../actions/logActions'
// Import materialize package
import M from 'materialize-css/dist/js/materialize.min.js'


const LogItem = ({ log, deleteLog, setCurrent }) => {

  // Function invoked to delete selected log from db
  const onDelete = () => {
    deleteLog(log._id);
    M.toast({ html: 'Log Deleted'})
  };

  return (
    <li className='collection-item'>
      <div>
        {/* Conditionally change text to red or blue if task needs attention */}
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
            }` }
          onClick={()=> setCurrent(log)}
         >
           {log.message}
        </a>
        <br/>
        <span className='grey-text'>
          <span className='black-text'>ID #{log._id}</span> last updated by {' '}
          <span className='black-text'>{log.tech}</span> on {' '}
          <Moment format="MMMM Do YYYY h:mm:ss a">{log.date}</Moment>
        </span>
            <a className='secondary-content' href='#!' onClick={onDelete}>
              <i className='material-icons grey-text'>delete</i>
            </a>
      </div>
    </li>
  )
}

// create prop types requirements object
LogItem.propTypes = {
  log:PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent:PropTypes.func.isRequired,
}

// export connection function with component to access/manipulate application state via redux store
export default connect(null,{ deleteLog, setCurrent })(LogItem);
