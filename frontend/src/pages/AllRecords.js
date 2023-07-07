import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllRecords() {
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

  return (
    <div>

      <div className=" grid grid-cols-3 gap-4">
        {data.map((item, index) => (
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
      </div>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default AllRecords;
