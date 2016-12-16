import React from 'react';

const Scholarships = () => {
  return (
    <div className="flex flex-column flex-row-l items-center justify-between">
      <div className="pv5 ph4 pr0-l mw7-l">
        <h2 className="eau-book blue ttu f-2 f-1-l">
          <span className="eau-bold">Diversity</span> Scholarships
        </h2>
        <p className="open-sans blue1 lh-copy f4-l">
          We are constantly looking for ways to
          make the web development community more inclusive,
          and our Diversity Scholarship program, which covers
          the cost of a full ScaleConf Colombia ticket is an
          important part of that effort.
          <br />
          <br />
          This scholarship is open to any person that
          self-identifies as part of an underpresented
          group in technology and is looking for an
          opportunity to grow.
        </p>
      </div>
      <img src={require('../../src/assets/images/diversity.png')} alt="ScaleConf Colombia Scholarships" className="w-100 w-40-l dib-l"/>
    </div>
  );
}

export default Scholarships;
