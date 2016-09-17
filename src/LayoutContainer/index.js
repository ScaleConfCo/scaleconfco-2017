import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

// Import global CSS before other components and their styles
import './index.global.css'
import styles from './index.css'

import GATracker from '../components/GoogleAnalytics'

import Footer from '../fragments/Footer'
import Hero from '../fragments/Hero'
import Suscription from '../fragments/Suscription'

if (typeof window !== 'undefined') {
  const FontFaceObserver = require('fontfaceobserver')

  const EausansBookObserver = new FontFaceObserver('eausans_book', {})
  const EausansBoldObserver = new FontFaceObserver('eausans_bold', {})

  EausansBookObserver.load().then(() => {
    document.body.classList.add('eausans_book-loaded')
  }, () => {
    document.body.classList.remove('eausans_book-loaded')
  })

  EausansBoldObserver.load().then(() => {
    document.body.classList.add('eausans_bold-loaded')
  }, () => {
    document.body.classList.remove('eausans_bold-loaded')
  })
}

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    params: PropTypes.object,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div className={ styles.layout }>
        <Helmet
          meta={ [
            {
              name: 'generator', content: `${
              process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
            },
            { property: 'og:site_name', content: pkg.name },
            { name: 'twitter:site', content: `@${ pkg.twitter }` },
          ] }
          script={ [
            { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' },
          ] }
        />

        { /* meta viewport safari/chrome/edge */ }
        <Helmet
          meta={ [ {
            name: 'viewport', content: 'width=device-width, initial-scale=1',
          } ] }
        />
        <style>{ "@-ms-viewport { width: device-width; }" }</style>
        <GATracker params={ this.props.params }>
          <Hero />
          <Suscription />
          <div className={ styles.content }>
            { this.props.children }
          </div>
          <Footer />
        </GATracker>
      </div>
    )
  }
}
