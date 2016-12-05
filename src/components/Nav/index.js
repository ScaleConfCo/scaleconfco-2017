import React from 'react'
// import { Sticky } from 'react-sticky'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      open: true
    }
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div className="fixed left-0 right-0 top-0 bg-blue1 z-999">
        { this.state.open &&
          <div className="ph4 mw80 center">
            <nav className="bg-blue1" style={{'fontSize': 0}}>
              <ul className="list tc pl0 eau-bold flex justify-between">
                <li className="pv3 dib-l bg-blue white ttu">
                  <a href="#" className="no-underline white ttu f4 ph4">ScaleConf</a>
                </li>
                <li className="pv3 dib-l">
                  <a href="#about" className="no-underline white ttu f4">About</a>
                </li>
                <li className="pv3 dib-l">
                  <a href="#speakers" className="no-underline white ttu f4">Speakers</a>
                </li>
                <li className="pv3 dib-l">
                  <a href="#venue" className="no-underline white ttu f4">Venue</a>
                </li>
                <li className="pv3 dib-l">
                  <a href="#scholarships" className="no-underline white ttu f4">Scholarships</a>
                </li>
                <li className="pv3 dib-l">
                  <a href="#codeofconduct" className="no-underline white ttu f4">Code of conduct</a>
                </li>
                <li className="pv3 dib-l">
                  <a href="#sponsors" className="no-underline white ttu f4">Sponsors</a>
                </li>
              </ul>
            </nav>
            <a onClick={this.toggle} className="white f1 tr db pr3 pt2 dn-l">&#x2715;</a>
            <a onClick={this.toggle} className="white f1 tr db dn-l">&#9776;</a>
          </div>
          }
      </div>
    )
  }
}
