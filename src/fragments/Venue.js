import React from 'react'
import Map from '../components/Map';

export default class Venue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pv5-l ph4-l mw80 center">
        <div className="pv5 ph4 ph0-l pt0-l">
          <h2 className="bg-white blue3 ttu f-2 tc pv2 pa3 dib f-1-l dib-l ph4-l pv2-l mb1-l">The Venue</h2>
          <p className="open-sans blue1 f4 f3-l w-two-thirds-l dib-l mh0-l pr7-l">
            ScaleConf Colombia will be held in
            downtown Medellín at the Ruta N auditorium.
            <br />
            Ruta N is known for being a center for growth and
            innovation in the city.
          </p>
          <hr className="ba dib blue1 tl w4 dn-l"/>
          <div className="w-third-l dib-l pl6-l bw1 bl--solid-l">
            <p className="white ttu eau-book mb1 f3 mv3-l">Address</p>
            <p className="open-sans blue1 mt0 f4">
              <span className="ttu">Calle 67 # 52-50</span>
              <br />
              Medellín, Colombia
            </p>
            <a href="http://www.rutanmedellin.org/" className="bg-blue1 dib white pa3 no-underline open-sans center ph4-l pv3-l">
              Website
            </a>
          </div>
        </div>
        <Map />
      </div>
    );
  }
}
