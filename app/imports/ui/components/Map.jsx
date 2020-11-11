/* Note I did not use this component */
import React from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Maps = ({ buildings }) => {
  console.log(buildings);
  return <MapContainer style={{ height: '100vh' }} zoom={2} center={[20, 100]}>
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <GeoJSON data={buildings}/>
  </MapContainer>;
};

export default Maps;
