import React from "react"

import Page from "../Page"
import CFP from "../../fragments/CFP"
import Contact from "../../fragments/Contact"
import Nav from "../../components/Nav"
import About from "../../fragments/About"
import Speakers from "../../fragments/Speakers"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <div className="bg-blue1 pa4 pb5">
        <Nav />
        <CFP />
      </div>
      <div className="ph4 pv5">
        <About />
      </div>
      <div className="bg-green4 pv5 ph4">
        <Speakers />
      </div>
      <Contact />
    </Page>
  )
}

export default Homepage
