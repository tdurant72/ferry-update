import React, { useState, useEffect, createContext, useContext } from "react";

export const FerryContext = createContext({
    ferries: [],
    setFerries: () => { }
})

const apiKey = `80e61cf4-541b-4651-8228-6376d80567f7`;
let ferryUrl = `https://cors-anywhere.herokuapp.com/http://www.wsdot.wa.gov/Ferries/API/Vessels/rest/vessellocations?apiaccesscode=${apiKey}`;

export function useFerryData() {
    const { ferries, setFerries } = useContext(FerryContext);
    //const [ferries, setFerries] = useState([]);
    const fetchFerries = async () => {
        const response = await fetch(ferryUrl);
        const ferryData = await response.json();
        //console.log(ferryData);
        setFerries(ferryData);
    };
    useEffect(() => {
        fetchFerries();
    }, []);
    return { ferries, setFerries }
}