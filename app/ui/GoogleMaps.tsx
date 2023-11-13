"use client"
import React, {useState, useEffect} from 'react'
import { GoogleMap, LoadScript } from "@googlemaps/react-wrapper";

const Map = () => {
    const [map, setMap] = useState(null);
  
    useEffect(() => {
      const initializeMap = async () => {
        const map = await new GoogleMap({
          center: { lat: 37.7833, lng: -122.4167 },
          zoom: 13,
        });
  
        const marker = new GoogleMaps.Marker({
          position: { lat: 37.7833, lng: -122.4167 },
          map,
          title: "My Store",
        });
  
        setMap(map);
      };
  
      initializeMap();
    }, []);
  
    return (
      <LoadScript
        id="google-maps-api"
        googleMapsApiKey={YOUR_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap ref={setMap} />
      </LoadScript>
    );
  };
  
  export default Map;