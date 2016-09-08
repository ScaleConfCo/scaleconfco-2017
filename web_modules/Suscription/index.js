import React, { Component } from "react"
import styles from "./index.css"

export default class Suscription extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <a
          href="http://eepurl.com/ca5SYn"
          className={ styles.link }
        >
        { 'Suscríbete al newsletter' }
        </a>
      </div>
    )
  }
}
