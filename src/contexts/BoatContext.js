import React, { useState, useEffect } from "react";
import axios from "axios";
const BoatContext = React.createContext();

let ferryUrl = ``;
const apiKey = `80e61cf4-541b-4651-8228-6376d80567f7`;

const BoatProvider = props => {
  const [ferries, setFerries] = useState([]);
  const fetchFerries = async () => {
    axios.get(``);
  };
  useEffect(() => {
    fetchFerries;
  }, [ferries]);

  return (
    <BoatContext.Provider
      value={{
        ferries
      }}
    ></BoatContext.Provider>
  );
};
