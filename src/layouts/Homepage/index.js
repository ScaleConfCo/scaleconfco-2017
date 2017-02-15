import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import { joinUri } from "phenomic"

import Header from "../../components/Header"
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

const Homepage = ({
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }) => {

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div>
      <Helmet
        title={ metaTitle }
        meta={ meta } />
      <Header />
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
      <div className="pa5 mw80 center" id="scholarships">
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
    </div>
  )
}

Homepage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Homepage.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Homepage
