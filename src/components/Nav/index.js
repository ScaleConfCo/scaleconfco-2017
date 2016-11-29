import React from 'react';
import Portal from 'react-portal'

import Hamburger from '../Hamburger'
import Menu from '../Menu'

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
    return (
      <div>
        { this.state.open ?
          <Portal isOpened closeOnOutsideClick closeOnEsc>
            <Menu onClick={this.toggle} />
          </Portal> :
          <Hamburger onClick={this.toggle} /> }
      </div>
    )
  }
}
