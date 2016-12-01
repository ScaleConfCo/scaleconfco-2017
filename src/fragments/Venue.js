import React from 'react'
// import { Link } from "phenomic"
import Map from '../components/Map';

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
          {/* <Link to="posts/first-post/">Link</Link> */}
          <a href="http://www.rutanmedellin.org/" className="bg-blue1 dib white pa3 no-underline open-sans center">
            Website
          </a>
        </div>
        <Map />
      </div>
    );
  }
}
