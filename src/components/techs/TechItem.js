import React from 'react'
// Import connect package
import { connect } from 'react-redux';
// Import prop-types package
import PropTypes from 'prop-types'
// Import logAction functionality pass in as prop to component
import { deleteTech } from '../../actions/techActions'

// Import materialize package
import M from 'materialize-css/dist/js/materialize.min.js'

// ----- Component ----- //
  // pass in and destructor props for use inside component
const TechItem = ({ tech: { _id, firstName, lastName }, deleteTech }) => {

  // Function - deletes specific tech and shows message
  const onDelete = () =>{
    deleteTech(_id);
    M.toast({ html: `${firstName} ${lastName} was Deleted` })
  }

  return (
    <li className='collection-item'>
      {firstName}{' '}{lastName}
      <a href='#!' className='secondary-content' onClick={onDelete}>
        <i className='material-icons grey-text'>delete</i>
      </a>
    </li>
  )
}

// create prop types requirements
TechItem.propTypes = {
  tech:PropTypes.object.isRequired,
  deleteTech:PropTypes.func.isRequired,
}

// export TechItem component and connection function to access/update state
export default connect(null, { deleteTech })(TechItem);
