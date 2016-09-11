import React, { Component } from 'react'

let particles
if (typeof window !== 'undefined') {
  particles = require('particles.js')
}

import Title from '../../components/Title'

import styles from './index.css'

export default class Hero extends Component {

  componentDidMount() {
    particles && particles.particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded')
    })
  }

  render() {
    return (
      <div id="particles-js" className={ styles.container }>
        <header className={ styles.header }>
          <Title />
          { "Colombia" }
        </header>
      </div>
    )
  }
}
