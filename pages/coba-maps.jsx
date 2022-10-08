import React, {useState} from 'react'
import dynamic from 'next/dynamic'

const CobaMaps = () => {

  const Maps = dynamic(() => import("../component/maps"), {
      ssr: false,
    });
  const MapsShow = dynamic(() => import("../component/maps-show"), {
    ssr: false,
  });
    const [location, setLocation] = useState({ lng: -5.42975, lat: 105.262268});
  
  return (
    <div>
      <p>coba</p>
      <Maps
      center={location}
      location={location}
      draggable={true}
      title="sample text"
      onDragMarker={(e) => {
        console.log("e", e);
        let loc = { lat: e.lng, lng: e.lat};
        setLocation(loc);
      }}
      />
      {"lng: " + location.lng}
      <br/>
      {"lat: " + location.lat}

      <MapsShow/>
      </div>
  )
}

export default CobaMaps