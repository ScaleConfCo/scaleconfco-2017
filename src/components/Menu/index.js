import React, { PropTypes } from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="bg-blue1 fixed absolute--fill">
      {/* <nav className="bg-blue1 aspect-ratio--object"> */}
        <a onClick={this.props.onClick} className="white f1 tr db pr3 pt2">&#x2715;</a>
        {/* <div className="">ScaleConf</div> */}
        <ul className="list tc pl0 eau-bold">
          <li className="pv3">
            <a href="" className="no-underline blue ttu f4">Call for proposals</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">About</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">Speakers</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">Venue</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">Scholarships</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">Code of conduct</a>
          </li>
          <li className="pv3">
            <a href="" className="no-underline white ttu f4">Sponsors</a>
          </li>
        </ul>
      </nav>
    )
  }
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
}
