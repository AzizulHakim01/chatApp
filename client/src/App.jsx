import React from "react";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import Chats from "./Chats";
import "./App.scss";

const socket = io.connect("http://localhost:3001");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true)
    }
  };
  return (
    <div className="App">
      {!showChat?(<div className="joinChatContainer">
        <h3>Join Room</h3>
        <input
          type="text"
          placeholder="your name"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Room ID"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}>Join Chat</button>
        
      </div>)
      :(<Chats socket={socket} username={username} room={room} />)}
    </div>
  );
};

export default App;
