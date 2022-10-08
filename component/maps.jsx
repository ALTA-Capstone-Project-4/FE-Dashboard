import React, { useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Maps = ({center, draggable, onDragMarker, location}) => {


  const markerRef = useRef(null);
  const dragHandlers = useMemo(() => ({
    dragend() {
      const marker = markerRef.current;
      if (marker != null) {
        onDragMarker(marker.getLatLng());
      }
    },
  }), [] 
  );


  return (
    <div>
    <MapContainer
    center={[center.lng, center.lat]}
    zoom={15}
    scrollWheelZoom={false}
    style={{ height:"200px", width:"100%" }}
    >
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    />
    <Marker
    position={[
      location && location.lng ? location.lng : "",
      location && location.lat ? location.lat : "",
    ]}
    draggable={draggable}
    eventHandlers={dragHandlers}
    ref={markerRef}
    style={{backgroundColor:"green"}}
    >
      <Popup style={{color:"red"}}>{"my title"}</Popup>
    </Marker>
    </MapContainer>
    </div>
  );
};

export default Maps;
