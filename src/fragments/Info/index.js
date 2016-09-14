import React, { Component, PropTypes } from 'react'
import Icon from '../../components/Icon'
import Button from '../../components/Button'

import styles from './index.css'

export default class Info extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      blue,
    } = this.context.metadata

    return (
      <div className={ styles.container }>
        <div className={ styles.head }>
          <Icon icon="announce" width="50px" height="50px" fill={ blue } />
          <h2 className={ styles.title }>
            { 'We’re looking for Speakers!' }
          </h2>
        </div>
        <p className={ styles.description }>
          { 'Do you' }
          <span className={ styles.emphasis }>{ ' love ' }</span>
          { 'scalable architecture, distributed systems, devops, modern tools and practices?' }
        </p>
        <p className={ styles.emphasisTitle }>
          { 'Got something cool to share?' }
        </p>
        <Button value={ 'Speak at scaleconf colombia' } backgroundColor={ blue } />
      </div>
    )
  }
}

Info.propTypes = {
}
