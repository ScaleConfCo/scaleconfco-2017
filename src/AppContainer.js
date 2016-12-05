import React, { PropTypes } from "react"

import "./index.global.css"

import GATracker from './components/GoogleAnalytics'

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"


if (typeof window !== 'undefined') {
  const html = document.documentElement;
  if (window.sessionStorage.fontsLoaded) {
    html.classList.add('fonts-loaded');
  } else {
    const FontFaceObserver = require('fontfaceobserver')

    const EausansBookObserver = new FontFaceObserver('eausans_book', {})
    const EausansBoldObserver = new FontFaceObserver('eausans_bold', {})
    const OpenSans = new FontFaceObserver('OpenSans', [
      {
        weight: 700
      },
      {
        weight: 600
      }
    ])

    window.Promise.all([EausansBookObserver, EausansBoldObserver, OpenSans]).then(() => {
      html.classList.add('fonts-loaded');
      sessionStorage.fontsLoaded = true;
    }, () => {
      html.classList.remove('fonts-loaded')
      sessionStorage.fontsLoaded = false;
    })
  }
}

const AppContainer = (props) => {
  return (
    <Container>
      <GATracker params={ props.params }>
        <DefaultHeadMeta />
        <Header />
        <Content>
          { props.children }
        </Content>
        <Footer />
      </GATracker>
    </Container>
  )
}

AppContainer.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object
}

export default AppContainer
