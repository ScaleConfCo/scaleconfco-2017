import React, { Component, PropTypes } from 'react'
import Icon from '../../components/Icon'

import styles from './index.css'

export default class SocialIcons extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
      blue,
    } = this.context.metadata

    return (
      <div className={ styles.container }>
        <Icon icon="twitter" link={ `https://twitter.com/${pkg.twitter}` } fill={ blue } />
        <Icon icon="facebook" link={ `https://facebook.com/${pkg.facebook}` } fill={ blue } />
      </div>
    )
  }
}
