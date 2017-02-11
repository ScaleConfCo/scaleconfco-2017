import React from "react"

import Page from "../Page"
import Contact from "../../fragments/Contact"
import About from "../../fragments/About"
import Speakers from "../../fragments/Speakers"
import Venue from "../../fragments/Venue"
import Scholarships from "../../fragments/Scholarships"
import CodeOfConduct from "../../fragments/CodeOfConduct"
import Sponsors from "../../fragments/Sponsors"
import Organizers from "../../fragments/Organizers"
import Schedule from "../../fragments/Schedule"
import Information from "../../fragments/Information"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <div className="pa5 mw80 center" id="about">
        <About />
      </div>
      <div className="bg-speakers" id="speakers">
        <Speakers />
      </div>
      <div className="bg-dark-dark-blue" id="schedule">
        <Schedule />
      </div>
      <div className="bg-sponsors" id="sponsors">
        <Sponsors />
      </div>
      <div className="bg-venue" id="venue">
        <Venue />
      </div>
      <div className="section mw80 center" id="scholarships">
        <Scholarships />
      </div>
      <div className="bg-dark-blue" id="codeofconduct">
        <CodeOfConduct />
      </div>
      <div className="bg-medium-dark-blue">
        <Information />
      </div>
      <div className="section gradient">
        <Organizers />
      </div>
      <div className="section pv5 ph4">
        <Contact />
      </div>
    </Page>
  )
}

export default Homepage
