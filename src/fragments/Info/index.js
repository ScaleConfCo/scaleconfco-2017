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

    const {
      icon,
      title,
      description,
      emphasis,
      buttonText,
      buttonLink,
    } = this.props

    const absolute = icon === 'connect'

    return (
      <div className={ styles.container }>
        <div className={ styles.head }>
          <Icon icon={ icon } width="50px" height="50px" fill={ blue } />
          <h2 className={ styles.title }>
            { title }
          </h2>
        </div>
        <p className={ styles.description }>
          { description(styles.emphasis) }
        </p>
        { emphasis &&
          <p className={ styles.emphasisTitle }>
            { emphasis }
          </p>
        }
        <Button value={ buttonText } link={ buttonLink } absolute={ absolute } />
      </div>
    )
  }
}

Info.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.func,
  emphasis: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
}
