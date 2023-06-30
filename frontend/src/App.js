import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://0.0.0.0:8000/api/temperature/')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])



  return (
    <div className="App">
      <h1>Home temperature</h1>
      {
        data.map((item, index) => {
          <ul key={index}>
            <li>{item}</li>
          </ul>

        })
      }
    </div>
  );
}

export default App;
