import React, { Component, PropTypes } from 'react'

import Suscription from '../../components/Suscription'
import Contact from '../../fragments/Contact'

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {

    return (
      <div>
        <Suscription />
        <Contact />
      </div>
    )
  }
}