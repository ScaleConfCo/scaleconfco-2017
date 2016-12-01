import React from 'react';

export default class CFP extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="eau-book white ttu f-2 mb2">
          <span className="eau-bold">Call for</span> proposals
        </h2>
        <p className="ttu green eau-book f3 mt0">Is Open</p>
        <hr className="ba dib green tl w4"/>
        <p className="open-sans white f4">
          Do you love scalable architecture,
          distribute systems, devops,
          modern tools and practices?
          <br/>
          <br/>
          Share your knowledge!
        </p>
        <a href="https://www.papercall.io/scaleconfco" className="bg-green dib mt4 no-underline open-sans pa3 f4">
          Be a speaker
        </a>
      </div>
    );
  }
}
