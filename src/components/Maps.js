import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

 function Maps(props) {

  const mapStyles = {
    width: '700px',
    height: '350px',
    position: "relative",
    borderRadius: "10px",
    border: "2px solid #A35B66"
  };

  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
    paddingLeft: "18px",
    paddingRight: "18px"
  }

  return (
    <div>
      <Map
        google={props.google}
        zoom={15}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{ lat: -1.6149417391307024, lng: 103.65945792308365}}
      >
        <Marker position={{ lat: -1.6149417391307024, lng: 103.65945792308365}} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC6h5GE5USsrlx8-0GcvRApC_VonHvQGys'
})(Maps);
