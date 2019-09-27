import React, { useState, useEffect, useContext } from "react";
//import { BoatContext } from "../../contexts/BoatContext";
import Spinner from '../shared/Spinner';
import Boat from '../Boat/Boat'
import axios from 'axios'
//import { useFerryData } from "../../contexts/FerryContext";
const Boats = (props) => {
    const [ferries, setFerries] = useState([])
    const [boatPins, setBoatPins] = useState([]);
    const [renderBoatPin, setRenderedPins] = useState(() => { })
    //const [ferryState] = useContext(BoatContext);
    //const { ferries, setFerries } = ferryState;
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
    // renderBoatPin = (Vessel, Latitude, Longitude, COG, SOG) => {
    //     setBoatPins({ boatPins })
    //     this.state.ferryLayer.add(boatPin)
    //     this.state.map.entities.push(boatPin);
    // }
    useEffect(() => {
        fetchFerries();
    }, []);

    return (
        <div>
            {ferries.map(ferry => (
                <Boat
                    key={ferry.VesselID}
                    VesselID={ferry.VesselID}
                    Vessel={ferry.VesselName}
                    Latitude={ferry.Latitude}
                    Longitude={ferry.Longitude}
                    COG={ferry.Heading}
                    SOG={ferry.Speed}
                // renderBoatPin={renderBoatPin}
                />
            ))

            }
        </div>

    )
    //return null
}

export default Boats;