import React from "react"

import Page from "../Page"
import CFP from "../../fragments/CFP"
import Contact from "../../fragments/Contact"
import Nav from "../../components/Nav"
import About from "../../fragments/About"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <div className="bg-blue1 pa4">
        <Nav />
        <CFP />
      </div>
      <div className="ph4 pv5">
        <About />
      </div>
      <Contact />
    </Page>
  )
}

export default Homepage
