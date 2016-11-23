import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="flex flex-row">
        <div className="bg-blue pa2 white ttu dit">ScaleConf</div>
        <ul className="list pl0 mv0 pv2 nowrap overflow-x-auto">
          <li className="dib">
            <a href="" className="no-underline ph2 ttu blue">Call for proposals</a>
          </li>
          <li className="dib">
            <a href="" className="no-underline ph2 ttu white">About</a>
          </li>
          <li className="dib">
            <a href="" className="no-underline ph2 ttu white">Speakers</a>
          </li>
          <li className="dib">
            <a href="" className="no-underline ph2 ttu white">Venue</a>
          </li>
          <li className="dib">
            <a href="" className="no-underline ph2 ttu white">Scholarships</a>
          </li>
          <li className="dib">
            <a href="" className="no-underline ph2 ttu white">Code of conduct</a>
          </li>
          <li className="dib">
            <a href="" className="no-underline ph2 ttu white">Sponsors</a>
          </li>
        </ul>
      </nav>
    )
  }
}
