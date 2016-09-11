import React, { Component } from 'react'

import styles from './index.css'

class Title extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <span className={ styles.scale }>{ "Scale" }</span>
        <span className={ styles.conf }>{ "Conf" }</span>
      </div>
    )
  }
}

export default Title