import React from 'react';

import Suscription from '../components/Suscription'

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex items-center">
        <div className="mw7-l dib-l">
          <h2 className="section__title section__title--about">
            About<br/>
              <span className="eau-book">the conference</span>
          </h2>
          <p className="section__content">
            Created by a team of active members
            of the sotfware community in Colombia,
            ScaleConf Colombia is a pioneering tech
            conference on scalability, DevOps and modern
            software tools and practices in the region.
            <br/>
            <br/>
            Our main objetive is to level up the community's
            knowledge, by bringing great speakers from the teams
            that are paving the way for a global scale in tomorrow's
            apps and services.
          </p>
          <h4 className="copy--about">
            Stay up on ScaleConf Colombia news.  <br/>
            Join our mailing list.
          </h4>
          <Suscription />
        </div>
        <img src={require('../../src/assets/images/logo.png')} alt="ScaleConf Colombia" className="pl4-l w-30 dib-l dn"/>
      </div>
    );
  }
}
