import React from 'react'
import Icon from '../components/Icon'
import Modal from 'react-modal'

const data = {
  'toptal': {
    info: 'Toptal is an exclusive network for the top freelance developers and designers from all over the world. Toptalers often travel the world and get sponsored to attend & speak at tech conferences, all while we find them work on intriguing projects with amazing clients like Airbnb and Zendesk.',
    twitter: 'toptal',
    url: ' https://www.toptal.com/'
  },
  'komet': {
    info: 'Having a work-life balance while innovating is a priority for us! Our workplace nurtures growth while providing a fun environment where we challenge and help each other to take on the floral industry with a comprehensive software.',
    twitter: 'kometsales',
    url: 'https://www.kometsales.com/'
  }
}

export default class Sponsors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      sponsor: null
    }

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal(sponsor) {
    this.setState({ showModal: true, sponsor })
  }

  hideModal() {
    this.setState({ showModal: false, sponsor: null })
  }

  renderModal() {
    if(!this.state.showModal) {
      return null
    }

    const sponsor = data[this.state.sponsor]

    return (
      <div className="center tc relative">
        <a onClick={this.hideModal} className="blue f1 tr db ph2 pointer absolute right-0">&#x2715;</a>
        <p className="open-sans lh-copy w-80-l center">
          { sponsor.info }
        </p>
        <a href={`https://twitter.com/${sponsor.twitter}`} className="green4 dib h-2 w-2-5 br-100 pa2 bg-white mr2">
          <Icon icon="twitter"></Icon>
        </a>
        <a href={sponsor.url} className="green4 dib h-2 w-2-5 br-100 pa2 bg-white ml2">
          <Icon icon="link"></Icon>
        </a>
      </div>
    )
  }

  render() {
    return (
      <div className="pa5 mw80 center">
        <h2 className="section__title section__title--sponsors">Sponsors</h2>
        <div className="flex-l items-center-l mb4-l">
          <p className="sponsors__content" style={{ flex: 1}}>
            Are you interested in sponsoring ScaleConf Colombia?
            <br />
            Let us know!
          </p>
          <div className="open-sans f4 white tc ma0-l bw1 bl--solid-l b--green6 pv4-l" style={{ flex: 1}}>
            <div className="b--white br3 b--dashed bw1 pv4 mv5 mv0-l center dib-l ph4-l">
              Your company here
            </div>
          </div>
        </div>
        <a href="mailto:hola@Scaleconfco.com?subject=I%20wanna%20sponsor%20ScaleConf%20Colombia!" className="open-sans no-underline f-s-d ph2-5 pv0-8 mt3 dib bg-bright-green dark-dark-blue">
          Become a sponsor
        </a>
        <div className="flex justify-around flex-column items-center tc mt5">
          <div className="w-50-l">
            <p className="open-sans bright-green f-30 mb1 bb-bright-green">Gold</p>
            <img src={require('../../src/assets/images/sponsors/toptal.png')} alt="Toptal" className="w-100-l pointer bg-white" onClick={this.showModal.bind(this, 'toptal')}/>
          </div>
          <div className="w-40-l">
            <p className="open-sans bright-green f-30 mb1 bb-bright-green">Platinum</p>
            <img src={require('../../src/assets/images/sponsors/bizagi.png')} alt="Bizagi" className="w-100-l bg-white" />
          </div>
          <div className="w-30-l">
            <p className="open-sans bright-green f-30 mb1 bb-bright-green">Partners</p>
            <img src={require('../../src/assets/images/sponsors/rutan.png')} alt="Ruta N" className="w-70-l" />
          </div>
          <div className="w-25-l">
            <p className="open-sans bright-green f-30 mb1 bb-bright-green">Startup</p>
            <img src={require('../../src/assets/images/sponsors/komet.png')} alt="Komet Sales" className="w-100-l pointer" onClick={this.showModal.bind(this, 'komet')}/>
            <img src={require('../../src/assets/images/sponsors/s4n.png')} alt="S4N" className="w-100-l"/>
          </div>
        </div>
        <Modal
          closeTimeoutMS={150}
          isOpen={this.state.showModal}
          onRequestClose={this.hideModal}
          contentLabel="Modal"
        >
          {this.renderModal()}
        </Modal>
      </div>
    )
  }
}
