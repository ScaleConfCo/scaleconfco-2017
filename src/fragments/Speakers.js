import React, {PropTypes} from 'react';
import Icon from '../components/Icon'
import enhanceCollection from "phenomic/lib/enhance-collection"

export default class Speakers extends React.Component {
  static contextTypes = {
    collection: PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      collection,
    } = this.context

    return (
      <div className="tc">
        <h2 className="bg-white eau-bold f-2 green4 mh3 pv2 ttu">
          The Speakers
        </h2>
        <p className="blue1 open-sans f4">
          A list of talented smart people <br/>
          that want to share their <br/>
          knowledge with us
        </p>
        {
          enhanceCollection(collection, {
            filter: { speaker: 'yes' }
          })
          .map(speaker => {
            return (
              <div className="mb5" key={speaker.name}>
                <img src={speaker.photo} alt={speaker.name} className="br-100"/>
                <p className="eau-book white ttu f4">{speaker.name}</p>
                <p className="open-sans blue4 center mw5">{speaker.description}</p>
                <a href={speaker.twitter} className="green4 dib h-15 w-15 br-100 pa2 bg-white mr2">
                  <Icon icon="twitter"></Icon>
                </a>
                <a href={speaker.url} className="green4 dib h-15 w-15 br-100 pa2 bg-white ml2">
                  <Icon icon="link"></Icon>
                </a>
              </div>
            )
          })
        }
      </div>);
  }
}

Speakers.propTypes = {
};
