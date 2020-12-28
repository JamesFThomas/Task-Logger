// Import react package and hooks
import React from 'react';

// This component will render an add button modal to the DOM
const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      {/* Add task to log modal */}
      <a
        href='#add-log-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          {/* Add technician to a task modal */}
          <a
            href='#tech-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          {/* Add person to list of technicians modal */}
          <a
            href='#tech-modal'
            className='btn-floating red modal-trigger'
          >
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AddBtn
