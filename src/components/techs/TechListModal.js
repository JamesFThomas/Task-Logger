// IMport React Package and hooks
import React, { useState, useEffect } from 'react'

const TechListModal = () => {
  // Initialize stat variables && useState hooks
    // State attribute to hold logs returned from API request
  const [ techs, setTechs ] = useState([]);
    // State attribute to indicated display of loading message
  const [ loading, setLoading ] = useState(false);

  // Function - to GET logs json server
  const getTechs = async () => {
    // Show loading message
    setLoading(true);
    // create variable set to return value of fetch request
    const res = await fetch('/techs');
    // create variable set to json config of API request
    const data = await res.json();
    // update state with returned logs
    setTechs(data);
    // stop showing loading message
    setLoading(false);
  };

  useEffect(()=>{
    // fetch logs on component render
    getTechs();
    // eslint-disable-next-line
  },[]);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4> Technician List</h4>
          <ul className='collection'>
            {!loading && techs.map(tech => (
              <li key={tech.id} className='collection-item'>{tech.firstName}</li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default TechListModal;
