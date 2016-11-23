import React, { Component } from 'react'
import SocialIcons from '../components/SocialIcons'
import Suscription from '../components/Suscription'

class Contact extends Component {
  render() {
    return (
      <div className="">
        <h2 className="">{ 'Let\’s stay in touch' }</h2>
        <Suscription />
        <a className="" href={ 'mailto: hola@scaleconfco.com' }>{ 'hola@scaleconfco.com' }</a>
        <SocialIcons />
      </div>
    )
  }
}

export default Contact
