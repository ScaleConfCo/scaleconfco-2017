import React, { Component, PropTypes } from 'react'

import Suscription from '../../components/Suscription'
import SocialIcons from '../../components/SocialIcons'

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {

    return (
      <div>
        <Suscription />
        <SocialIcons />
      </div>
    )
  }
}
