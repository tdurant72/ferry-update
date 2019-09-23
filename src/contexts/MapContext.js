import React, { useState, useEffect } from "react";
import axios from "axiox";

export const MapContext = React.createContext();

export function MapContextController({ children }) {
  let initMapState = {
    map: null,
    ferryLayer: null,
    terminalLayer: null,
    views: []
  };
  const [mapData, setMapData] = useState(null);
  const [views, setViews] = useState([]);

  useEffect(() => {
    axios.get(``);
  });

  return (
    <MapContext.Provider value={[map, setmap]}>{children}</MapContext.Provider>
  );
}
