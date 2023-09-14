import React from "react";
import { useEffect, useState } from "react";
import { useWebSocket } from "react-use-websocket";

// ws://127.0.0.1:8000/ws/socket-server/
export const TestPage = () => {
  const [data, setData] = useState();
  // const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/socket-server/`)
  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8000/ws/socket-server/");

    socket.onopen = (data) => {
      // console.log(data);
    };

    socket.onmessage = (event) => {
      // const data = JSON.parse(event.data);
      setData(JSON.parse(event.data));
      console.log(data);
    };

    return () => {
      socket.close();
    };
  }, []);
  // console.log(data)
  return (
    <div>
        {data}
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
