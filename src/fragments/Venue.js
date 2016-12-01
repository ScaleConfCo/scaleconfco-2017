import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

const access_token = 'pk.eyJ1IjoibW9udG9nZWVrIiwiYSI6ImNpdzZvYnVqODAzeHYyb3Bkc3dudXZoZ3oifQ.3i9hrMrgo2E_NJt00-W9Cg';
// const tiles = 'https://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=';
const tiles = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=';

import L from 'leaflet';

L.Icon.Default.imagePath = '.';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


class RutaNMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 6.264524,
      lng: -75.566549,
      zoom: 16,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} className="vh-50" zoomControl={false}>
        <TileLayer
          attribution=' &copy; <a href="https://www.mapbox.com/about/maps/" target="_blank">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
          url={`${tiles}${access_token}`}
        />
        <Marker position={position} />
      </Map>
    );
  }
}

export default class Venue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="bg-blue3 pv5 ph4">
          <h2 className="bg-white blue3 ttu f-2 tc pv2">The Venue</h2>
          <p className="open-sans blue1 f4">
            ScaleConf Colombia will be held in
            downtown Medellín at the Ruta N auditorium.
            <br />
            Ruta N is known for being a center for growth and
            innovation in the city.
          </p>
          <hr className="ba dib blue1 tl w4"/>
          <p className="white ttu eau-book mb1 f3">Address</p>
          <p className="open-sans blue1 mt0 f4">
            <span className="ttu">Calle 67 # 52-50</span>
            <br />
            Medellín, Colombia
          </p>
          <a href="http://www.rutanmedellin.org/" className="bg-blue1 dib white pa3 no-underline open-sans center">
            Website
          </a>
        </div>
        <div>
          <RutaNMap />
        </div>
      </div>
    );
  }
}
