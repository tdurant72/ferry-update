import React, { Component, useState, useEffect } from "react";
import "./Map.css";
import views from "../../data/views";
//import FetchMapData from "../../calls/FetchMapData";
import Boats from '../Boat/Boats'
export default function Map(props) {

  //const [views, setViews] = useState([]);
  const [anchor, setAnchor] = useState(null);
  const [ferryLayer, setFerryLayer] = useState(null);
  const [map, setMap] = useState(null);
  const [filteredFerries, setFilteredFerries] = useState([]);
  const [boatPins, setBoatPins] = useState([]);
  //const [data, loading] = FetchMapData();
  useEffect(() => {
    let mapLoading = true;
    renderMap();
  }, []);
  const renderMap = async () => {
    loadScript(
      "https://www.bing.com/api/maps/mapcontrol?key=AsYvNI-GHrtArcRybTU256h6zvO5I3G9zzdC0kFwiXkdoA81Ux9RRPSjxm_o_Aqi&callback=loadMapScenario"
    );
    window.loadMapScenario = loadMapScenario;
    console.log(views);
  };
  const loadMapScenario = async () => {
    let lat = views[0].geometry.coordinates[0];
    let lng = views[0].geometry.coordinates[1];

    const map = new window.Microsoft.Maps.Map(
      document.getElementById("map"),
      {
        center: new window.Microsoft.Maps.Location(lat, lng),
        mapTypeId: window.Microsoft.Maps.MapTypeId.road,
        zoom: views[0].properties.zoom
      }
    );
    var layer = new window.Microsoft.Maps.Layer();
    let ferryLayer = new window.Microsoft.Maps.Layer();

  };
  const renderBoatPin = (boatId, COG, Latitude, Longitude, VesselName, SOG, boatIcon, boatPin, boatLocation, summary, time) => {
    this.setBoatPins({ boatPins })
    ferryLayer.add(boatPin)
    map.entities.push(boatPin);
    //console.log("renderBoatPin called")
    let boatInfobox = new window.Microsoft.Maps.Infobox(boatLocation, {
      visible: false
    })
    console.log(map)

    // boatInfobox.setMap(this.state.map)
    // window.Microsoft.Maps.Events.addHandler(boatPin, "click", function () {
    //     boatInfobox.setOptions({
    //         visible: true,
    //         title: VesselName,
    //         description: summary
    //     })
    // })
  }
  return <div id="map">
    {
      <Boats />
    }

  </div>;
}

//this function has to be outside of component
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");

  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}
