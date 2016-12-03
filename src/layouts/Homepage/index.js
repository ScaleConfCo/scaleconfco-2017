import React from "react"

import Page from "../Page"
import Contact from "../../fragments/Contact"
import Nav from "../../components/Nav"
import About from "../../fragments/About"
import Speakers from "../../fragments/Speakers"
import Venue from "../../fragments/Venue"
import Scholarships from "../../fragments/Scholarships"
import CodeOfConduct from "../../fragments/CodeOfConduct"
import Sponsors from "../../fragments/Sponsors"
import Organizers from "../../fragments/Organizers"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <div className="bg-blue1 pa4">
        <Nav />
      </div>
      <div className="ph4 pv5 mw80 center">
        <About />
      </div>
      <div className="bg-green4">
        <Speakers />
      </div>
      <div className="bg-blue3">
        <Venue />
      </div>
      <div className="mw80 center">
        <Scholarships />
      </div>
      <div className="bg-green5">
        <CodeOfConduct />
      </div>
      <div className="bg-blue1">
        <Sponsors />
      </div>
      <div className="gradient pv5 ph4">
        <Organizers />
      </div>
      <div className="pv5 ph4">
        <Contact />
      </div>
    </Page>
  )
}

export default Homepage
