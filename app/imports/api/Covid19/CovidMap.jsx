import React from 'react';
import { Map, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import datas from '../../../data/campusmap.json';

const CovidMap = () => {
  const onEachBuilding = (building, layer) => {
    layer.options.fillColor = building.properties.color;
    const name = building.properties.Building;
    layer.bindPopup(name);
  };

  return (<Map style={{ height: '90vh' }} zoom={17} center={[21.29930, -157.81563]}>
        <GeoJSON
            data={datas}
            onEachFeature={onEachBuilding}
        />;
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
  );

};

export default CovidMap;