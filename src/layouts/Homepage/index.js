import React from "react"

import Page from "../Page"
import CFP from "../../fragments/CFP"
import Contact from "../../fragments/Contact"
import Nav from "../../components/Nav"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <div className="bg-blue1">
        <Nav />
        <CFP />
      </div>
      <Contact />
    </Page>
  )
}

export default Homepage
