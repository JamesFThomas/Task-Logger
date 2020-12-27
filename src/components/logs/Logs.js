// IMport React Package and hooks
import React, { useState, useEffect } from 'react'
//


const Logs = () => {
  // Initialize stat variables && userState hooks
    // State attribute to hold logs returned from API request
  const [ logs, setLogs ] = useState([]);
    // State attribute to indicated display of loading message
  const [ loading, setLoading ] = useState(false);

  // Function - to GET logs json server
  const getLogs = async () => {
    // Show loading message
    setLoading(true);
    // create variable set to return value of fetch request
    const res = await fetch('/logs');
    // create variable set to json config of API request
    const data = await res.json();
    // update state with returned logs
    setLogs(data);
    // stop showing loading message
    setLoading(false);
  };

  useEffect(()=>{
    // fetch logs on component render
    getLogs();
    // eslint-disable-next-line
  },[]);

  if(loading){
    return <h4>Loading...</h4>
  }

  return (
    <ul className='collection-with-header'>
      <li className='collection-header'>
        <h4 className='center'> System Logs </h4>
      </li>
        { !loading && !logs.length ? (
          <p className='center'> No Logs Returned</p>
        ) : (
          logs.map(log => <li key={log.id}>{log.message}</li>)
        )}
    </ul>
  )
}

export default Logs;
