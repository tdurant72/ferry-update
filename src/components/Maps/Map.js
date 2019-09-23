import React, { Component, useState, useEffect } from "react";
import "./Map.css";
import views from "../../data/views";
import FetchMapData from "../../calls/FetchMapData";
export default function Map() {
  const [map, setMap] = useState(null);
  //const [views, setViews] = useState([]);
  const [anchor, setAnchor] = useState(null);
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

    const initMap = new window.Microsoft.Maps.Map(
      document.getElementById("map"),
      {
        center: new window.Microsoft.Maps.Location(lat, lng),
        mapTypeId: window.Microsoft.Maps.MapTypeId.road,
        zoom: views[0].properties.zoom
      }
    );
    var layer = new window.Microsoft.Maps.Layer();
  };
  return <div id="map"></div>;
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
