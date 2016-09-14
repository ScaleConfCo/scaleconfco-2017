import React, { Component, PropTypes } from 'react'

import styles from './index.css'

export default class Button extends Component {
  render() {
    const { value, link, ...props } = this.props
    return (
      <div className={ styles.container } style={ props } >
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
  backgroundColor: PropTypes.string,
}
