import React from 'react'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      open: false
    }
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state
    const openClass = !open ? 'dn': '';
    return (
      <div className="fixed left-0 right-0 top-0 bg-blue1 z-999">
        {
          this.state.open &&
          <a onClick={this.toggle} className="white f1 tr db dn-l ph2 pointer">&#x2715;</a>
        }
        {
          !this.state.open &&
          <a onClick={this.toggle} className="white f1 tr db dn-l ph2 pointer">&#9776;</a>
        }
        <div className={`ph4 mw80 center ${openClass} db-l`}>
          <nav className="bg-blue1 vh-100 h-auto-l" style={{'fontSize': 0}}>
            <ul className="list tc pl0 eau-bold flex justify-between flex-column flex-row-l h-75">
              <li className="pv3 bg-blue white ttu dn dib-l">
                <a onClick={this.toggle} href="#" className="no-underline white ttu f4 ph4">ScaleConf</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#about" className="no-underline white ttu f4">About</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#speakers" className="no-underline white ttu f4">Speakers</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#venue" className="no-underline white ttu f4">Venue</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#scholarships" className="no-underline white ttu f4">Scholarships</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#codeofconduct" className="no-underline white ttu f4">Code of conduct</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#sponsors" className="no-underline white ttu f4">Sponsors</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
