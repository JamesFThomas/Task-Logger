// Import react and hooks
import React, { useState } from 'react'
// Import materialize package
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
  // Initialize useState hook and component state variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Function - capture form values and submit to state
  const onSubmit = () =>{
    if(firstName === '' || lastName === ''){
      M.toast({ html: 'Please enter the first and last name' })
    }
    else{
      console.log(firstName, lastName);
    }

    // clear modal input fields after closing
    setFirstName('');
    setLastName('');
  };

  return (
    <div id='add-tech-modal' className='modal'>
        {/* Modal content */}
        <div className='modal-content'>
          <h4> New Technician </h4>
            <div className='row'>
              <div className='input-field'>
                <input
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor='firstName' className='active'>
                  First Name
                </label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field'>
                <input
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor='firstName' className='active'>
                  Last Name
                </label>
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
    </div>
  );
};

export default AddTechModal;
