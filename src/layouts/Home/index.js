import React, { Component, PropTypes } from 'react'

// import Suscription from '../../components/Suscription'
import Contact from '../../fragments/Contact'
import Main from '../../fragments/Main'

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {

    return (
      <div>
        {/* <Suscription /> */}
        <Main />
        <Contact />
      </div>
    )
  }
}
