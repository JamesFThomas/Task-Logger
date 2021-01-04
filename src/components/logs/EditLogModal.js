// Import react and hooks
import React, { useState, useEffect } from 'react';
// Import TechSelectOptions component
import TechSelectOptions from '../techs/TechSelectOptions';
// Import connect package
import { connect } from 'react-redux';
// Import prop-types package
import PropTypes from 'prop-types';
// Import logAction functionality pass in as prop to component
import { updateLog } from '../../actions/logActions'

// Import materialize package
import M from 'materialize-css/dist/js/materialize.min.js'

// ----- Component ----- //
const EditLogModal = ({ current, updateLog }) => {
  // Initialize useState hook and component state variables
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  // React Hook
  useEffect(()=>{
    if(current){
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [ current ])

  // Function - capture form values and submit to state
  const onSubmit = () =>{

    if(message === '' || tech === ''){
      M.toast({ html: 'Please enter a Task and Tech to attend...' })
    }
    else{
      // create new log object to be persisted
      const updLog = {
        _id: current._id,
        message,
        attention,
        tech,
        date: new Date()
      };

      // persist updated log in DB
      updateLog(updLog);

      // use toast to indicate successful log update
      M.toast({ html: `Log Updated by ${tech}` })

      // clear modal input fields after closing
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
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
                <TechSelectOptions />
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

// create prop types requirements object
EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
}

// setting styling on modal
const modalStyle = {
  width: '75%',
  height: '75%'
};

// Create object, copy state values to be updated
const mapStateToProps = (state) => ({
  current: state.log.current
});

// export AddLogModal component and connection function to access/update state
export default connect(mapStateToProps, { updateLog })(EditLogModal);
