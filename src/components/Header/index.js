import React, { Component } from 'react'
import Nav from "../Nav"

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
      <div id="particles-js" className="w-100 gradient h-650">
        <Nav />
        <div className="mw80 w-100 center relative">
          <header className="absolute pa4 w-100 tc tl-l w-auto-l">
            <h1 className="ttu bg-white pa1 green1 mt6 eau-book f-1 f-6-l dib-l ph4-l pv3-l mb3-l">ScaleConf</h1>
            <p className="ttu green2 pv3 ph4 pt3 f-3 mt0 open-sans ph0-l mw22 f3-l mw6-l center ml0-l">
              The first Colombian tech event focused on Scalability.
            </p>
            <p className="ttu white f3 lh-copy tracked eau-bold pa0-l f-30 mw22 center ml0-l">
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
