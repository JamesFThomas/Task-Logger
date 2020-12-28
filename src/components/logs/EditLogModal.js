// Import react and hooks
import React, { useState } from 'react'
// Import materialize package
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {
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
      console.log(message, tech, attention);
    }
    // clear modal input fields after closing
    setMessage('');
    setTech('');
    setAttention(false);
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
                <option value='John Jenkins'> John Jenkins </option>
                <option value='Tyrone Smith'> Tyrone Smith </option>
                <option value='Derick Wilson'> Derick Wilson </option>
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

// setting styling on modal
const modalStyle = {
  width: '75%',
  height: '75%'
};

export default EditLogModal;
