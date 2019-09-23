import React, { useState, useEffect } from "react";
import * as viewsData from "../data/views";
function FetchMapData(viewsData) {
  const [data, setViewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchViews() {
    const response = await fetch(viewsData);
    setViewsData(response);
  }
  useEffect(() => {
    fetchViews();
  }, []);
  return [data, loading];
}

export default FetchMapData;
