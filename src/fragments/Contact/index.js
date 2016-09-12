import React, { Component } from 'react'
import SocialIcons from '../../components/SocialIcons'

import styles from './index.css'

class Contact extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <h3 className={ styles.title }>{ 'Let\’s stay in touch' }</h3>
        <a href={ 'mailto: hola@scaleconfco.com' }>{ 'hola@scaleconfco.com' }</a>
        <SocialIcons />
      </div>
    )
  }
}

export default Contact
