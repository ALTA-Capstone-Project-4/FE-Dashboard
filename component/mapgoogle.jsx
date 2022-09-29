import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Home = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY });

  if (!isLoaded) return <div>Loading....</div>;
  return <Map />;
};

function Map() {
  const center = { lat: -6.176919645697105, lng: 106.82621640787929 };
  //   const center = useMemo(() => ({ lat: -6.176919645697105, lng: 106.82621640787929 }), []);
  return (
    <div>
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Home;
