import React, { Component } from 'react'
import Title from '../../components/Title'

import styles from './index.css'

export default class Footer extends Component {

  render() {
    return (
      <footer className={ styles.footer }>
        <a
          href="/"
          className={ styles.link }
        >
        <Title />
        </a>
        <span className={ styles.separator }>{ `Colombia 2017 ${String.fromCharCode(169)}` }</span>
      </footer>
    )
  }
}
