import React from 'react';

const CodeOfConduct = () => {
  return (
    <div className="pa5 mw80 center">
      <h2 className="section__title section__title--coc">
        Our code of <span className="eau-book">conduct</span>
      </h2>
      <p className="section__content coc__content lh-copy">
        A primary goal of ScaleConf Colombia is to be inclusive to the largest
        number of contributors, with the most varied and diverse backgrounds
        possible. As such, we are committed to providing a friendly, safe and
        welcoming environment for all, regardless of gender, sexual orientation,
        ability, ethnicity, socioeconomic status, and religion (or lack thereof).
        This code of conduct outlines our expectations for all those who participate
        in our community, as well as the consequences for unacceptable behavior.
        <br />
        <br />
        We invite all those who participate in ScaleConf Colombia to help us
        create safe and positive experiences for everyone.
      </p>
      <a href="https://github.com/ScaleConfCo/code-of-conduct" className="btn btn--coc center">
        Read Code of Conduct
      </a>
    </div>
  );
}

export default CodeOfConduct;
