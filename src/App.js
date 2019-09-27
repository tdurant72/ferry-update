import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Maps/Map";
import Boats from './components/Boat/Boats'
import { BoatProvider } from "./contexts/BoatContext";
//import { FerryContext } from "./contexts/FerryContext";
function App() {
  return (
    <div className="App">
      <BoatProvider>
        <Map />
      </BoatProvider>
      {/* <FerryContext.Provider value={{}}>
        <Map />
      </FerryContext.Provider> */}
    </div>
  );
}

export default App;
