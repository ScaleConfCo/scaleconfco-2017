import React, { Component } from 'react'

let particles
if (typeof window !== 'undefined') {
  particles = require('particles.js')
}

export default class Hero extends Component {

  componentDidMount() {
    particles && particles.particlesJS.load('particles-js', '/assets/particles.json', function() {
      // eslint-disable-next-line no-console
      console.log('callback - particles.js config loaded');
    })
  }

  render() {
    return (
      <div className="gradient">
        <div id="particles-js" className="mw80 w-100 vh-90 center relative">
          <header className="absolute pa4 w-100 tc">
            <h1 className="ttu bg-white pa1 green1 f-1 mt6 eau-book">ScaleConf</h1>
            <p className="ttu green2 pv3 ph4 pt3 f-3 mt0 open-sans">
              The first Colombian tech event focused on Scalability.
            </p>
            <p className="ttu white pa3 f3 lh-copy tracked eau-bold">
              Medellín, <span className="underline">Colombia</span> March 25 2017
            </p>
            <a className="bg-blue1 dib white pa3 no-underline open-sans" href="https://ti.to/colombia-dev/scaleconfco">
              Buy your tickets now
            </a>
          </header>
        </div>
      </div>
    )
  }
}
