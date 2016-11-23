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
      <div className="flex mt3 justify-between">
        <Icon icon="twitter" link={ `https://twitter.com/${pkg.twitter}` } className="fl-blue"  width="40px"
          style={ { marginRight: '20px' } }
        />
        <Icon icon="facebook" link={ `https://facebook.com/${pkg.facebook}` } className="fl-blue" width="40px" />
      </div>
    )
  }
}