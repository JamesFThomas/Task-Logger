// Import React Package and hooks
import React, { useEffect } from 'react'
// Import connect package
import { connect } from 'react-redux';
// Import prop-types package
import PropTypes from 'prop-types';
// Import TechItem component
import TechItem from './TechItem'
// Import logAction functionality pass in as prop to component
import { getTechs } from '../../actions/techActions'

// ----- Component ----- //
  // Pass in and deconstruct any props
const TechListModal = ({ getTechs, tech: { techs, loading } }) => {

  // Initialize useEffect hook
  useEffect(()=>{
    // fetch techs on component render
    getTechs();
    // eslint-disable-next-line
  },[]);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4> Technician List</h4>
          <ul className='collection'>
            {/* Conditionally render list of techs */}
            {
              !loading &&
              techs !== null &&
              techs.map(tech => < TechItem tech={tech} key={tech._id} /> )
            }
          </ul>
      </div>
    </div>
  );
};

// create prop types requirements
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

// Deconstruct state values from Component to update state
const mapStateToProps = state => ({
  tech: state.tech
});

// export AddLogModal component and connection function to access/update state
export default connect(mapStateToProps,{ getTechs })(TechListModal);
