import React, { useState, useEffect } from "react";
import axios from "axios";

export const BoatContext = React.createContext({
  ferries: [],
  setFerries: () => { }
});

const apiKey = ``;
let ferryUrl = `https://cors-anywhere.herokuapp.com/http://www.wsdot.wa.gov/Ferries/API/Vessels/rest/vessellocations?apiaccesscode=${apiKey}`;


export const BoatProvider = (props) => {

  const [ferries, setFerries] = useState({
    ferries: [],
    setFerries: () => { }
  });
  const fetchFerries = async () => {
    const response = await fetch(ferryUrl);
    const ferryData = await response.json();
    //console.log(ferryData);
    setFerries(ferryData);
  };
  useEffect(() => {
    fetchFerries();
  }, []);

  return (
    <BoatContext.Provider
      value={{
        ferries: ferries,
        updateFerries: () => {
          setFerries({ ...ferries })
        }
      }}>
      {props.children}
    </BoatContext.Provider>
  );
};
