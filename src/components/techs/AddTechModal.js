// Import react and hooks
import React, { useState } from 'react'
// Import connect package
import { connect } from 'react-redux';
// Import prop-types package
import PropTypes from 'prop-types';
// Import techAction functionality pass in as prop to component
import { addTech } from '../../actions/techActions'

// Import materialize package
import M from 'materialize-css/dist/js/materialize.min.js'

// ----- Component ----- //
const AddTechModal = ({ addTech}) => {
  // Initialize useState hook and component state variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Function - capture form values and submit to state
  const onSubmit = () =>{
    // ensure all input fields are filled out
    if(firstName === '' || lastName === ''){
      // If not filled send toast message
      M.toast({ html: 'Please enter the first and last name' })
    }
    else{
      // If all fields filled out, add new tech to DB via JSOn server
      addTech({
        firstName,
        lastName
      });

      // Send message indicating successful add of tech
      M.toast({ html: `${firstName} ${lastName} was added as a technician` })



      // clear modal input fields after closing
      setFirstName('');
      setLastName('');
    }
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

// create prop types requirements object
AddTechModal.propTypes = {
  addTech:PropTypes.func.isRequired,
}

// export AddLogModal component and connection function to access/update state
export default connect(null, { addTech })(AddTechModal);
