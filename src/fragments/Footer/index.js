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
        >{ `${String.fromCharCode(169)}` } <Title /> { "2017" }
        </a>
      </footer>
    )
  }
}
