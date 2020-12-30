// Import react and hooks
import React, { useState } from 'react';
// Import TechSelectOptions component
import TechSelectOptions from '../techs/TechSelectOptions';
// Import connect package
import { connect } from 'react-redux';
// Import prop-types package
import PropTypes from 'prop-types';
// Import logAction functionality pass in as prop to component
import { addLog } from '../../actions/logActions'


// Import materialize package
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = ({ addLog }) => {
  // Initialize useState hook and component state variables
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  // Function - capture form values and submit to state
  const onSubmit = () =>{
    if(message === '' || tech === ''){
      M.toast({ html: 'Please enter a Task and Tech to attend...' })
    }
    else{
      // create a new log object
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      }

      // Invoke addLog function to add new log to DB
      addLog(newLog);

      // create toast showing successful add of new log
      M.toast({ html: `Log added by ${tech}`});

      // clear modal input fields after closing
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      {/* Modal content */}
      <div className='modal-content'>
        <h4> Enter System Log</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <label htmlFor='message' className='active'>
                Log Message
              </label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field'>
              <select
                name='tech'
                value={tech}
                className='browser-default'
                onChange={e => setTech(e.target.value)}
              >
                <option value='' disabled>
                  Select Technician
                </option>
                < TechSelectOptions />
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='input-field'>
              <p>
                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    checked={attention}
                    value={attention}
                    onChange={e => setAttention(!attention)}
                  />
                   <span> Needs Attention </span>
                </label>
              </p>
            </div>
          </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

// Add prop-types requirements for component
AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}

// setting styling on modal
const modalStyle = {
  width: '75%',
  height: '75%'
};

// export AddLogModal component and connection function to access/update state
export default connect(null, { addLog })(AddLogModal);
