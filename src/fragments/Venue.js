import React from 'react'
import Map from '../components/Map';

export default class Venue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pa5 mw80 center">
        <div className="ph0-l pt0-l">
          <h2 className="section__title section__title--venue">Venue</h2>
          <div className="content__container">
            <p className="section__content venue__content w-two-thirds-l dib-l mh0-l ">
              ScaleConf Colombia will be held in
              downtown Medellín at the Ruta N auditorium.
              Ruta N is known for being a center for growth and
              innovation in the city.
            </p>
            <hr className="venue__divide--horizontal-line"/>
            <div className="w-third-l dib-l bw1 bl--solid-l venue__address">
              <p className="white ttu eau-book mb1 f3 mv3-l">Address</p>
              <p className="venue__content venue__content__address">
                <span className="ttu">Calle 67 # 52-50</span>
                <br />
                Medellín, Colombia
              </p>
              <a href="http://www.rutanmedellin.org/" className="open-sans no-underline f-s-d ph2-5 pv0-8 mt3 dib bg-bright-green dark-dark-blue">
                Website
              </a>
            </div>
          </div>
        </div>
        <Map />
      </div>
    );
  }
}
