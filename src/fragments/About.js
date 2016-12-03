import React from 'react';

import Suscription from '../components/Suscription'

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mw7-l">
        <h2 className="eau-book ttu f-2 blue mt0 f-1-l">
          <span className="eau-bold">About</span> the conference
        </h2>
        <p className="open-sans f5 lh-copy blue1 f4-l">
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
        <h4 className="blue open-sans f-4 lh-copy f3-l">
          Stay up on ScaleConf Colombia news
          <br />
          Join our mailing list
        </h4>
        <Suscription />
      </div>
    );
  }
}
