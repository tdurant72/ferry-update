import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'

const FetchBoats = () => {
    const [ferries, setFerries] = useState([]);
    const apiKey = `80e61cf4-541b-4651-8228-6376d80567f7`;
    let ferryUrl = `https://cors-anywhere.herokuapp.com/http://www.wsdot.wa.gov/Ferries/API/Vessels/rest/vessellocations?apiaccesscode=${apiKey}`;
    // const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const fetchFerries = () => {
        axios
            .get(ferryUrl)
            .then(response => {
                console.log(response.data);
                setFerries(response.data)
            })
    };
    useEffect(() => {
        fetchFerries();
    }, []);
    return { ferries };
}

export default FetchBoats;