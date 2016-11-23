import React, { Component } from 'react'

let particles
if (typeof window !== 'undefined') {
  particles = require('particles.js')
}

export default class Hero extends Component {

  componentDidMount() {
    particles && particles.particlesJS.load('particles-js', 'assets/particles.json', function() {
      // eslint-disable-next-line no-console
      console.log('callback - particles.js config loaded');
    })
  }

  render() {
    return (
      <div className="gradient">
        <div id="particles-js" className="mw80 w-100 mb3 pb6 center relative">
          <header className="absolute ml4 mt3 f3">
            <h1 className="ttu bg-white pl3 pr3 pa1 dib mb0 green1">ScaleConf</h1>
            <p className="ttu green2 mw5">
              The first Colombian tech event focused on Scalability
            </p>
            <p className="ttu white mw6">
              Medellín, Colombia March 25 2017
            </p>
          </header>
        </div>
      </div>
    )
  }
}
