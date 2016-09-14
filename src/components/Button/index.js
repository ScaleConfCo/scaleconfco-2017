import React, { Component, PropTypes } from 'react'

import styles from './index.css'

export default class Button extends Component {
  render() {
    const { value, link, style } = this.props
    return (
      <div className={ styles.container } style={ style } >
        <a
          href={ link }
          className={ styles.link }
        >
          { value }
        </a>
      </div>
    )
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  style: PropTypes.object,
}
