import React, { Component, PropTypes } from 'react'
import Icon from '../Icon'

import styles from './index.css'

export default class SocialIcons extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div className={ styles.container }>
        <Icon icon="twitter" link={ `https://twitter.com/${pkg.twitter}` } />
        <Icon icon="facebook" link={ `https://twitter.com/${pkg.twitter}` } />
        <Icon icon="announce" link={ `https://twitter.com/${pkg.twitter}` } width={ '50' } height={ '50' } />
        <Icon icon="connect" link={ `https://twitter.com/${pkg.twitter}` } width={ '50' } height={ '50' } />
      </div>
    )
  }
}
