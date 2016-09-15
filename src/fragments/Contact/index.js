import React, { Component } from 'react'
import SocialIcons from '../SocialIcons'

import styles from './index.css'

class Contact extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <h2 className={ styles.title }>{ 'Let\’s stay in touch' }</h2>
        <a className={ styles.link } href={ 'mailto: hola@scaleconfco.com' }>{ 'hola@scaleconfco.com' }</a>
        <SocialIcons />
      </div>
    )
  }
}

export default Contact
