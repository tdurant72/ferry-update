import React, { useState, useEffect, useContext } from "react";
// import { BoatContext } from "../../contexts/BoatContext";
const Boats = () => {
    const apiKey = ``;
    let ferryUrl = `https://cors-anywhere.herokuapp.com/http://www.wsdot.wa.gov/Ferries/API/Vessels/rest/vessellocations?apiaccesscode=${apiKey}`;
    const [ferries, setFerries] = useState([]);
    const fetchFerries = async () => {
        const response = await fetch(ferryUrl);
        const ferryData = await response.json();
        console.log(ferryData);
        setFerries(ferryData);
    };
    useEffect(() => {
        fetchFerries();
    }, []);
    // const [ferries, setFerries] = useContext(BoatContext);

    return (
        // <BoatContext>
        <div>

        </div>

    );


}

export default Boats;