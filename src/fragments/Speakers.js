import React, {PropTypes} from 'react';
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
            filter: { type: 'speaker' }
          })
          .map(speaker => {
            return (
              <div className="mb5" key={speaker.name}>
                <img src={speaker.photo} alt={speaker.name} className="br-100"/>
                <p className="eau-book white ttu f4">{speaker.name}</p>
                <p className="open-sans blue4 center mw5">{speaker.description}</p>
                <a href={speaker.twitter} className="green4 dib h-15 w-15 br-100 pa2 bg-white mr2">
                    <svg style={{fill:"currentcolor"}} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="currentcolor" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/></svg>
                </a>
                <a href={speaker.url} className="green4 dib h-15 w-15 br-100 pa2 bg-white ml2">
                  <svg style={{fill:"currentcolor"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.016 11c-.048-1.03-.168-2.035-.356-3h3.5c.41.935.685 1.942.79 3h-3.934zm3.933 2c-.105 1.058-.38 2.065-.79 3h-3.5c.188-.965.309-1.97.356-3h3.934zm-1.968-7h-2.83c-.375-1.197-.875-2.292-1.461-3.286 1.716.684 3.195 1.831 4.291 3.286zm-4.948 0h-2.033v-3.674c.841 1.01 1.526 2.256 2.033 3.674zm-2.033 12h2.033c-.507 1.418-1.192 2.664-2.033 3.674v-3.674zm-2-15.674v3.674h-2.033c.507-1.418 1.192-2.664 2.033-3.674zm0 5.674v3h-2.994c.052-1.04.181-2.044.389-3h2.605zm0 5v3h-2.605c-.208-.956-.336-1.96-.389-3h2.994zm0 5v3.674c-.841-1.01-1.526-2.256-2.033-3.674h2.033zm2-2v-3h2.994c-.052 1.04-.181 2.044-.389 3h-2.605zm0-5v-3h2.605c.208.956.336 1.96.389 3h-2.994zm-4.69-8.286c-.586.994-1.086 2.089-1.461 3.286h-2.83c1.096-1.455 2.575-2.602 4.291-3.286zm-2.326 8.286h-3.933c.105-1.058.38-2.065.79-3h3.5c-.189.965-.309 1.97-.357 3zm.357 5h-3.5c-.41-.935-.685-1.942-.79-3h3.934c.047 1.03.167 2.035.356 3zm-2.322 2h2.83c.375 1.197.875 2.292 1.461 3.286-1.716-.684-3.195-1.831-4.291-3.286zm11.671 3.286c.586-.994 1.086-2.089 1.461-3.286h2.83c-1.096 1.455-2.575 2.602-4.291 3.286z"/></svg>
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
