import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Maps/Map";
import Boats from './components/Boat/Boats'
function App() {
  return (
    <div className="App">
      <Map />
      <Boats />
    </div>
  );
}

export default App;
