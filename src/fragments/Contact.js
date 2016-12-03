import React, { Component } from 'react'
import SocialIcons from '../components/SocialIcons'
import Suscription from '../components/Suscription'

class Contact extends Component {
  render() {
    return (
      <div className="mw80 center">
        <h2 className="eau-bold blue1 ttu tc f3">
          Let’s stay in touch
        </h2>
        <p className="open-sans blue1 f4 tc ttu">
          Join our mailing list
        </p>
        <div className="mw6 center">
          <Suscription />
        </div>
        <a href="mailto: hola@scaleconfco.com" className="eau-book blue tc db mv3 b">
          hola@scaleconfco.com
        </a>
        <SocialIcons />
      </div>
    )
  }
}

export default Contact
