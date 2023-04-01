import React from 'react'
import "./App.scss"
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3001")

const App = () => {
  return (
    <div>App</div>
  )
}

export default App