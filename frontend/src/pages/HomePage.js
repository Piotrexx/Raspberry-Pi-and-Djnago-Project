import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [data, setData] = useState([]);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  function formatDate(date) {
    const dateTime = new Date(date);
    return dateTime.toLocaleString(undefined, options);
  }

  useEffect(() => {
    fetch("http://localhost:8000/api/temperature/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  // console.log(data.length)
  // console.log(data)
  let latestRecords = data.slice(-3, data.length);
  latestRecords = latestRecords.reverse();
  // console.log(latestRecords)
  return (
    <div>
    <h1>Latest records</h1>
      <div className=" grid grid-cols-3 gap-4">
        {latestRecords.map((item, index) => (
          <ul key={index}>
            <p>{index + 1}.</p>
            <li className="font-bold text-center">
              Temperature: {item.temperature}
            </li>
            <li className="text-center">
              <p>Date and Time:</p> <span>{formatDate(item.date_created)}</span>
            </li>
          </ul>
        ))}
        <Link to="/AllRecords">
          <button>See all records</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
