import React from 'react';

export const Sponsors = () => {
  return (
    <div className="mw80 center pv5 ph4">
      <h2 className="bg-white blue1 dib eau-bold f-2 pa3 pv2 tc ttu f-1-l mb4-l">Sponsors</h2>
      <div className="flex-l items-center-l mb4-l">
        <p className="white open-sans f4 lh-copy f3-l" style={{ flex: 1}}>
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
      <a href="mailto:hola@Scaleconfco.com?subject=I%20wanna%20sponsor%20ScaleConf%20Colombia!" className="bg-green dib no-underline open-sans pa3 f4 blue1">
        Become a sponsor
      </a>
    </div>
  );
}

export default Sponsors;
