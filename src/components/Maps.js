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
        initialCenter={{ lat: -2.063892893066391,  lng: 102.29863641052873}}
      >
        <Marker position={{ lat: -2.0646720276450754, lng: 102.2969701014051}} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC6h5GE5USsrlx8-0GcvRApC_VonHvQGys'
})(Maps);
