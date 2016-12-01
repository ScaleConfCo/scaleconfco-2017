import React, { Component, PropTypes } from 'react'
import Icon from '../../components/Icon'

export default class SocialIcons extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg
    } = this.context.metadata

    return (
      <div className="tc mt4">
        <a href={ `https://twitter.com/${pkg.twitter}` } className="w2 h2 blue dib mr2">
          <Icon icon="twitter" />
        </a>
        <a href={ `https://facebook.com/${pkg.facebook}` } className="w2 h2 blue dib ml2">
          <Icon icon="facebook" />
        </a>
      </div>
    )
  }
}
