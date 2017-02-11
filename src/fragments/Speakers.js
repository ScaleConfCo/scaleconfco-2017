import React, {PropTypes} from 'react';
import Icon from '../components/Icon'
import Modal from 'react-modal'
import enhanceCollection from "phenomic/lib/enhance-collection"
import ScheduleData from '../assets/schedule/data'

export default class Speakers extends React.Component {
  static contextTypes = {
    collection: PropTypes.array,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      speaker: null
    };

    this.showProfile = this.showProfile.bind(this);
    this.hideProfile = this.hideProfile.bind(this);
  }

  showProfile(speaker) {
    this.setState({ showModal: true, speaker });
  }

  hideProfile() {
    this.setState({ showModal: false, speaker: null });
  }

  renderProfile() {
    if (!this.state.showModal) {
      return null;
    }

    const speaker = this.state.speaker

    return (
      <div className="center tc relative">
        <a onClick={this.hideProfile} className="blue f1 tr db ph2 pointer absolute right-0">&#x2715;</a>
        <img src={require(`../../src/assets/speakers/${speaker.photo}`)} alt={speaker.name} className="br-100 mt5"/>
        <p className="eau-book f-4 blue ttu">{speaker.name}</p>
        { speaker.twitter &&
          <a href={`https://twitter.com/${speaker.twitter}`} className="green4 dib h-2 w-2-5 br-100 pa2 bg-white mr2">
            <Icon icon="twitter"></Icon>
          </a>
        }
        { speaker.website &&
          <a href={speaker.website} className="green4 dib h-2 w-2-5 br-100 pa2 bg-white ml2">
            <Icon icon="link"></Icon>
          </a>
        }
        {
          speaker.description &&
          <p className="open-sans lh-copy w-80-l center">
            { speaker.description }
          </p>
        }
      </div>
    )
  }

  render() {
    const { collection } = this.context
    let speakers = enhanceCollection(collection, {
      filter: { speaker: 'yes' }
    });

    return (
      <div className="tc mw80 center tl-l">
        <h2 className="section__title section__title--speakers">
          Speakers
        </h2>
        <p className="copy--speakers">
          A list of talented smart people
          that want to share their
          knowledge with us
        </p>
        <div className="flex flex-wrap justify-center">
          {
            speakers.map((speaker, i) => {
              speaker.talk = ScheduleData.dayTwo.find((session) => session.speaker === speaker.twitter).title

              return (
                <div className="speaker__container mb5 w5-l tc" key={`${speaker.name}-${i}`}>
                  { speaker.photo &&
                    <img src={require(`../../src/assets/speakers/${speaker.photo}`)} alt={speaker.name} onClick={this.showProfile.bind(this, speaker)} className="br-100 pointer"/>
                  }
                  <p className="eau-book f-4 bright-green ttu">{speaker.name}</p>
                  <p className="f-c-t white">{speaker.role} @ {speaker.company}</p>
                  <p className="f-c-t white">{speaker.talk}</p>
                  { speaker.twitter &&
                    <a href={`https://twitter.com/${speaker.twitter}`} className="green4 dib h-2 w-2-5 br-100 pa2 bg-white mr2">
                      <Icon icon="twitter"></Icon>
                    </a>
                  }
                  { speaker.website &&
                    <a href={speaker.website} className="green4 dib h-2 w-2-5 br-100 pa2 bg-white ml2">
                      <Icon icon="link"></Icon>
                    </a>
                  }
                </div>
              )
            })
          }
          <Modal
            closeTimeoutMS={150}
            isOpen={this.state.showModal}
            onRequestClose={this.hideProfile}
            contentLabel="Modal"
          >
            {this.renderProfile()}
        </Modal>
        </div>
      </div>);
  }
}

Speakers.propTypes = {
};
