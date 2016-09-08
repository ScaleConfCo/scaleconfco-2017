import React, { Component } from "react"

import styles from "./index.css"

export default class Footer extends Component {

  render() {
    return (
      <footer className={ styles.footer }>
        <a
          href="/"
          className={ styles.link }
        >{ `${String.fromCharCode(169)} ScaleConf 2017` }
        </a>
      </footer>
    )
  }
}
