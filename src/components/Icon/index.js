import React, { Component, PropTypes } from 'react'
import Svg from 'react-svg-inline'
import TwitterIcon from '../../assets/icons/iconmonstr-twitter-4.svg'
import FacebookIcon from '../../assets/icons/iconmonstr-facebook-4.svg'
import AnnounceIcon from '../../assets/icons/announce.svg'
import ConnectIcon from '../../assets/icons/connect.svg'

import styles from './index.css'

const icons = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  announce: AnnounceIcon,
  connect: ConnectIcon,
}

export default class Icon extends Component {
  renderIcon(icon, props) {
    return <Svg svg={ icons[icon] } {...props} />
  }
  render() {
    const { icon, link, ...props } = this.props
    return (
      <div className={ styles.container }>
        { link ?
          <a
            href={ link }
            className={ styles.link }
          >
            { this.renderIcon(icon, props) }
          </a> :
          this.renderIcon(icon, props)
        }
      </div>
    )
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
}
