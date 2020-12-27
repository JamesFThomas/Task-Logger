// import react package and hooks to use in component
import React from 'react';
// import prop types package
import PropTypes from 'prop-types'

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
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log:PropTypes.object.isRequired,

}

export default LogItem;
