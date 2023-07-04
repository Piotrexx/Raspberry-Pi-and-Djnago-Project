import React from 'react'
import { useEffect, useState } from 'react';
const HomePage = () => {
  const [data, setData] = useState([])
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };
  function formatDate(date) {
    const dateTime = new Date(date);
    return dateTime.toLocaleString(undefined, options);
  }


  useEffect(() => {
    fetch('http://localhost:8000/api/temperature/')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])



  return (
    <div className="App">
      <h1>Home temperature (YOU ARE LOGGED IN !)</h1>
      {
      
        data.map((item, index) => (
          <ul key={index}>
            <li>
              {item.temperature}
            </li>
            <li>
              {formatDate(item.date_created)}
            </li>
          </ul>
        ))
      }
    </div>
  );
}

export default HomePage