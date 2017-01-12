import React, { Component } from 'react'
import SocialIcons from '../components/SocialIcons'
import Suscription from '../components/Suscription'

class Contact extends Component {
  render() {
    return (
      <div className="mw80 center">
        <h2 className="section__title section__title--contact">
          Let’s stay in touch
        </h2>
        <p className="title--join">
          Join our mailing list
        </p>
        <div className="mw6 center">
          <Suscription />
        </div>
        <a href="mailto: hola@scaleconfco.com" className="title--mail">
          hola@scaleconfco.com
        </a>
        <SocialIcons />
      </div>
    )
  }
}

export default Contact
