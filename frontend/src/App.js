import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/temperature/')
    .then(response => response.json())
    .then(data => setData(data))
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }, [])



  return (
    <div className="App">
      <h1>Home temperature</h1>
      {
      
        data.map((item, index) => (
          <ul key={index}>
            <li>
              {item.temperature}
            </li>
            <li>
              {item.date_created}
            </li>
          </ul>
        ))
    
      }
    </div>
  );
}

export default App;
