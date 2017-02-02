import React from 'react';

const Scholarships = () => {
  return (
    <div className="flex flex-column flex-row-l items-center justify-between">
      <div className="title_container">
        <h2 className="section__title section__title--scholarships">
          Diversity <br/>
          <span className="eau-book">Scholarships</span>
        </h2>
        <p className="section__content scholarship__content">
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
        <a href="https://scaleconfcolombia.typeform.com/to/OFYCec" className="btn btn--coc center bg-blue white">
          Apply
        </a>
        <br/>
        <a href="https://donorbox.org/scaleconf-colombia-s-diversity-program" className="btn btn--coc center bg-blue white">
          Support diversity ticket
        </a>
      </div>
      <img src={require('../../src/assets/images/diversity.png')} alt="ScaleConf Colombia Scholarships" className="w-100 w-40-l dib-l scholarships__image"/>
    </div>
  );
}

export default Scholarships;
