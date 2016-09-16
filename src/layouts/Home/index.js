import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import Contact from '../../fragments/Contact'
import Main from '../../fragments/Main'

export default class Homepage extends Component {
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div>
        <Helmet
          title={ pkg.homepageTitle }
        />
        <Main />
        <Contact />
      </div>
    )
  }
}
