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
      <div className="fixed left-0 right-0 top-0 bg-blue1 z-999 gradient">
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
              <li className="pv3">
                <a onClick={this.toggle} href="/#about" className="nav__opt">About</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="/#speakers" className="nav__opt">Speakers</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="/#schedule" className="nav__opt">Schedule</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="/#sponsors" className="nav__opt">Sponsors</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="/#venue" className="nav__opt">Venue</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="/#scholarships" className="nav__opt">Scholarships</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="/#codeofconduct" className="nav__opt">Code of conduct</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="/hotels" className="nav__opt">Hotels</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
