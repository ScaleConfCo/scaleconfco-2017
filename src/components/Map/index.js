import React, { PropTypes } from 'react'

const isClient = typeof window !== 'undefined'

let Map, TileLayer, Marker, Popup
if (isClient) {
  const reactLeaflet = require('react-leaflet')
  Map = reactLeaflet.Map
  TileLayer = reactLeaflet.TileLayer
  Marker = reactLeaflet.Marker
  Popup = reactLeaflet.Popup

  const L = require('leaflet')

  // L.Icon.Default.imagePath = '.'
  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });
}

const access_token = 'pk.eyJ1IjoibW9udG9nZWVrIiwiYSI6ImNpdzZvYnVqODAzeHYyb3Bkc3dudXZoZ3oifQ.3i9hrMrgo2E_NJt00-W9Cg';
// const tiles = 'https://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=';
const tiles = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=';

export default function NMap({ coordinates, zoom }) {
  return (
    <div>
      {
        isClient &&
        <Map center={coordinates[0][0]} zoom={zoom} className="vh-50" zoomControl={false}>
          <TileLayer
            url={`${tiles}${access_token}`}
          />
          {
            coordinates.map((coordinate, i) => {
              return (
                <Marker position={coordinate[0]} key={i}>
                  <Popup>
                    <span>{coordinate[1]}</span>
                  </Popup>
                </Marker>
              )
            })
          }
        </Map>
      }
    </div>
  );
}

NMap.defaultProps = {
  coordinates: [[[6.264524, -75.566549]]],
  zoom: 16
};

NMap.propTypes = {
  coordinates: PropTypes.array,
  zoom: PropTypes.number
}