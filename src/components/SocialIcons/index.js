import React, { Component, PropTypes } from 'react'
import Svg from 'react-svg-inline'

import styles from './index.css'
import twitterSvg from '../../assets/icons/iconmonstr-twitter-1.svg'
import facebookSvg from '../../assets/icons/iconmonstr-facebook-1.svg'

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
        <a
          href={ `https://twitter.com/${pkg.twitter}` }
          className={ styles.link }
        >
          <Svg svg={ twitterSvg } />
        </a>
        <a
          href={ `https://facebook.com/${pkg.facebook}` }
          className={ styles.link }
        >
          <Svg svg={ facebookSvg } />
        </a>
      </div>
    )
  }
}
