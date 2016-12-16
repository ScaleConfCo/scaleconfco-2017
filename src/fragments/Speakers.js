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

    let speakers = enhanceCollection(collection, {
      filter: { speaker: 'yes' }
    });

    return (
      <div className="tc mw80 center tl-l pv5 ph4">
        <h2 className="bg-white eau-bold f-2 green4 mh3 pv2 ttu f-1-l dib-l ph4-l pv2-l mh0-l mb0-l">
          The Speakers
        </h2>
        <p className="blue1 open-sans f4 f3-l">
          A list of talented smart people <br className="dn-l"/>
          that want to share their <br className="dn-l"/>
          knowledge with us
        </p>
        <div className="flex flex-wrap justify-center">
          {
            speakers.map((speaker, i) => {
              return (
                <div className="mb5 ma5-l w5-l tc" key={`${speaker.name}-${i}`}>
                  <img src={require(`../../src/assets/speakers/${speaker.photo}`)} alt={speaker.name} className="br-100"/>
                  <p className="eau-book white ttu f4">{speaker.name}</p>
                  <p className="open-sans center blue4 mw5">{speaker.description}</p>
                  { speaker.twitter &&
                    <a href={speaker.twitter} className="green4 dib h-15 w-15 br-100 pa2 bg-white mr2">
                      <Icon icon="twitter"></Icon>
                    </a>
                  }
                  { speaker.url &&
                    <a href={speaker.url} className="green4 dib h-15 w-15 br-100 pa2 bg-white ml2">
                      <Icon icon="link"></Icon>
                    </a>
                  }
                </div>
              )
            })
          }
        </div>
      </div>);
  }
}

Speakers.propTypes = {
};
