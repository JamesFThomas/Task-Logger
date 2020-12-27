// import react package and hooks to use in component
import React from 'react';
// import prop types package
import PropTypes from 'prop-types'
// import moment package to include date
import Moment from 'react-moment'

const LogItem = ({ log }) => {

  return (
    <li className='collection-item'>
      <div>
        {/* Conditionally change text to red or blue if task needs attention */}
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
            }` }
         >
           {log.message}
        </a>
        <br/>
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by {''}
          <span className='black-text'>{log.tech}</span> on
          <Moment format="MMMM Do YYYY h:mm:ss a">{log.date}</Moment>
        </span>
            <a className='secondary-content' href='#!'>
              <i className='material-icons grey-text'>delete</i>
            </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log:PropTypes.object.isRequired,

}

export default LogItem;
