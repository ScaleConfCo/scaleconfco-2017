import React, { Component } from "react"
import particles from "particles.js"

import styles from "./index.css"

export default class Hero extends Component {

  componentDidMount() {
    particles.particlesJS.load("particles-js", "assets/particles.json", function() {
      console.log("callback - particles.js config loaded")
    })
  }

  render() {
    return (
      <div id="particles-js" className={ styles.container }>
        <header className={ styles.header }>
          { "Scale Conf Colombia" }
        </header>
      </div>
    )
  }
}
