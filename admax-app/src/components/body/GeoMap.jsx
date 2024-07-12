import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './GeoMap.css';

const mapStyles = {
  width: '100%',
  height: '400px', // Adjust the height as needed
};

const GeoMap = (props) => {
  return (
    <div className="geo-map">
      <Map
        google={props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: -1.286389, // Replace with the latitude of Admax Tech Solutions
          lng: 36.817223, // Replace with the longitude of Admax Tech Solutions
        }}
      >
        <Marker
          position={{
            lat: -1.286389, // Replace with the latitude of Admax Tech Solutions
            lng: 36.817223, // Replace with the longitude of Admax Tech Solutions
          }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your actual API key
})(GeoMap);

