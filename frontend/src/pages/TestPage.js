import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// ws://127.0.0.1:8000/ws/socket-server/
export const TestPage = () => {
  let [data, setData] = useState([])
  // const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/socket-server/`)
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
  // console.log(data)
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
        <Link to="/AllRecords">
          <button>See all records</button>
        </Link>
      </div>
      {/* {data
        ? data.map((item) => {
            return (
              <div>
                <p>{item}</p>
              </div>
            );
          })
        : <p>loading...</p>} */}
    </div>
  );
};
