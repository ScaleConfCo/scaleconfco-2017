import React, { Component, PropTypes } from 'react'
import Svg from 'react-svg-inline'
import TwitterIcon from '../../assets/icons/twitter.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import LinkIcon from '../../assets/icons/link.svg'

const icons = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  link: LinkIcon
}

export default class Icon extends Component {
  renderIcon(icon, props) {
    return <Svg svg={ icons[icon] } {...props} />
  }

  render() {
    const { icon, link, ...props } = this.props
    return (
      <div>
        { link ?
          <a
            href={ link }
            className="no-underline"
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
