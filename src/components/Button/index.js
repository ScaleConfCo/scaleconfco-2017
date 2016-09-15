import React, { Component, PropTypes } from 'react'
import cn from 'classnames'

import styles from './index.css'

export default class Button extends Component {
  render() {
    const { value, link, absolute } = this.props
    return (
      <div className={ styles.container } >
        <a
          href={ link }
          className={ cn(styles.link, { [styles.absolute]: absolute }) }
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
  absolute: PropTypes.bool,
}
