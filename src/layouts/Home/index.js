import React, { Component, PropTypes } from "react"

import Suscription from "../../Suscription"
import SocialIcons from "../../SocialIcons"
import Page from "../Page"

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {

    return (
      <Page { ...this.props }>
        <Suscription />
        <SocialIcons />
      </Page>
    )
  }
}
