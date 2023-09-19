import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TestPage = () => {
  let [data, setData] = useState([])

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8000/ws/socket-server/")

    socket.onopen = () => {
      
    };

    socket.onmessage = (event) => {
   
      setData(JSON.parse(event.data))
      console.log(JSON.parse(event.data))
    };

    return () => {
      socket.close()
    };
  }, [])
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

  let latestRecords = data.slice(-3, data.length);
  latestRecords = latestRecords.reverse();
  return (
    <div>
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
