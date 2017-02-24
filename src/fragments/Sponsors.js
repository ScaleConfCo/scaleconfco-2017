import React from 'react'
import Icon from '../components/Icon'
import Modal from 'react-modal'

export default class Sponsors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
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
        <div className="flex justify-around flex-row-l mt5">
          <div className="w-40-l">
            <p className="open-sans bright-green f-30 mb1 bb-bright-green">Partners</p>
            <img src={require('../../src/assets/images/sponsors/toptal.png')} alt="Toptal" className="w-100-l pointer" onClick={() => {this.setState({ showModal: true })} }/>
            <img src={require('../../src/assets/images/sponsors/rutan.png')} alt="Ruta N" className="w-70-l" />
          </div>
          <div className="w-25-l">
            <p className="open-sans bright-green f-30 mb1 bb-bright-green">Startup</p>
            <img src={require('../../src/assets/images/sponsors/komet.png')} alt="Komet Sales" className="w-100-l"/>
          </div>
        </div>
        <Modal
          closeTimeoutMS={150}
          isOpen={this.state.showModal}
          onRequestClose={() => { this.setState({ showModal: false }) }}
          contentLabel="Modal"
        >
           <div className="center tc relative">
            <a onClick={() => { this.setState({ showModal: false }) }} className="blue f1 tr db ph2 pointer absolute right-0">&#x2715;</a>
            <p className="open-sans lh-copy w-80-l center">
              Toptal is an exclusive network for the top freelance developers and designers from all over the world. Toptalers often travel the world and get sponsored to attend & speak at tech conferences, all while we find them work on intriguing projects with amazing clients like Airbnb and Zendesk.
            </p>
            <a href="https://twitter.com/toptal" className="green4 dib h-2 w-2-5 br-100 pa2 bg-white mr2">
              <Icon icon="twitter"></Icon>
            </a>
            <a href="https://www.toptal.com/" className="green4 dib h-2 w-2-5 br-100 pa2 bg-white ml2">
              <Icon icon="link"></Icon>
            </a>
           </div>
        </Modal>
      </div>
    )
  }
}
