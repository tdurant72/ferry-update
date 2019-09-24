import React, { useState, useEffect } from "react";
import axios from "axios";
export const BoatContext = React.createContext();
const apiKey = ``;
let ferryUrl = `http://www.wsdot.wa.gov/Ferries/API/Vessels/rest/vessellocations?apiaccesscode=${apiKey}`;


export const BoatProvider = ({ children }) => {

  const [ferries, setFerries] = useState([]);
  const fetchFerries = async () => {
    const response = await fetch(ferryUrl);
    const ferryData = await response.json();
    console.log(ferryData);
    setFerries(ferryData);
    // axios.get(`http://www.wsdot.wa.gov/Ferries/API/Vessels/rest/vessellocations?apiaccesscode=`)
    //   .then(response => {
    //     console.log(response);
    //     // setState({
    //     //   ferries: response
    //     // })
    //   })
  };
  useEffect(() => {
    fetchFerries();
  }, [ferries]);

  return (
    <BoatContext.Provider
      value={[ferries, setFerries]}
    >{children}</BoatContext.Provider>
  );
};
