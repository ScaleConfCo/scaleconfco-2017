import React, { PropTypes } from 'react';
import { Link } from 'react-router'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="bg-blue1 fixed absolute--fill">
        <a onClick={this.props.onClick} className="white f1 tr db pr3 pt2">&#x2715;</a>
        {/* <div className="">ScaleConf</div> */}
  
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
            <Link to="#sponsors" className="no-underline white ttu f4">Sponsors</Link>
            {/* <a href="" className="no-underline white ttu f4">Sponsors</a> */}
          </li>
        </ul>
      </nav>
    )
  }
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
}
