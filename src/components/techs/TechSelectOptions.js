// Import React Package and hooks
import React, { useEffect } from 'react'
// Import connect package
import { connect } from 'react-redux';
// Import prop-types package
import PropTypes from 'prop-types';
// Import TechAction functionality pass in as prop to component
import { getTechs } from '../../actions/techActions'

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {

  // Initialize useEffect hook
  useEffect(()=>{
    // fetch techs on component render
    getTechs();
    // eslint-disable-next-line
  },[]);

  return (
    !loading && techs !== null && techs.map(t =>
      <option key={t._id} value={`${t.firstName}${' '}${t.lastName}`}>
        {t.firstName}{' '}{t.lastName}
      </option>
    )
  );
};

// create prop types requirements
TechSelectOptions.propTypes = {
  tech:PropTypes.object.isRequired,
  getTechs:PropTypes.func.isRequired,
}

// Deconstruct state values from Component to update state
const mapStateToProps = state => ({
  tech: state.tech
})

// export AddLogModal component and connection function to access/update state
export default connect(mapStateToProps, { getTechs })(TechSelectOptions)
