import React, { useState, useEffect } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import Loadin from './Loadin';
import Legend from './Legend';
import 'leaflet/dist/leaflet.css';
import Load from '../../api/stuff/load';

const Covdid19 = () => {
  const [buildings, setBuilding] = useState([]);
  const load = () => {
    const loadData = new Load();
    loadData.load(setBuilding);
  };
  useEffect(load, []);
  console.log(buildings);
  return (<div>
        {buildings.length === 0 ? <Loadin/> : <div>
          <div className={'leaflet-container'}>
            <MapContainer
              style={{ height: '100vh' }}
              zoom={18}
              center={[21.3000, -157.8164]}
              minZoom={17}
          >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={buildings}/>
          </MapContainer>;
            <Legend/></div>
        </div>}
  </div>
  );
};

export default Covdid19;