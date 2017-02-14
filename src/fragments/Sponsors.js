import React from 'react';

export const Sponsors = () => {
  return (
    <div className="pa5 mw80 center">
      <h2 className="section__title section__title--sponsors">Sponsors</h2>
      <div className="flex-l items-center-l mb4-l">
        <p className="sponsors__content" style={{ flex: 1}}>
          Are you interested in sponsoring ScaleConf Colombia?
          <br />
          Let us know!
        </p>
        <div className="open-sans f4 white tc ma0-l bw1 bl--solid-l b--green6 pv4-l" style={{ flex: 1}}>
          <div className="b--white br3 b--dashed bw1 pv4 mv5 mv0-l center dib-l ph4-l">
            Your company here
          </div>
        </div>
      </div>
      <a href="mailto:hola@Scaleconfco.com?subject=I%20wanna%20sponsor%20ScaleConf%20Colombia!" className="open-sans no-underline f-s-d ph2-5 pv0-8 mt3 dib bg-bright-green dark-dark-blue">
        Become a sponsor
      </a>
      <div className="mt6 w-25-l">
        <p className="open-sans bright-green f-30 mb1 bb-bright-green">Partners</p>
        <img src={require('../../src/assets/images/sponsors/rutan.png')} alt="Ruta N" className="w-100-l"/>
      </div>
    </div>
  );
}

export default Sponsors;
