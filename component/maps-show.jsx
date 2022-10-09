import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const MapsShow = ({size, lat, long, popup}) => {
  const position = [lat, long];

  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={size}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {popup}
          </Popup>
        </Marker>
      </MapContainer>
      ,
    </div>
  );
};

export default MapsShow;
