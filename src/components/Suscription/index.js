import React, { Component } from 'react'

export default class Suscription extends Component {
  render() {
    return (
      <div className="mt3 tc center">
        {/* <h2 className="f3 ttu mt0">{ 'Join our mailing list' }</h2> */}
        <form
          action="//scaleconfco.us13.list-manage.com/subscribe/post?u=5e496acbac5eeec4a22312bd0&amp;id=96c6dc44ae"
          method="post"
        >
          <input
            className="f5 bg-white br0 ba b--blue eau-book pa2 h-2 w-70"
            type="email"
            name="EMAIL"
            placeholder="YOU@EMAIL.COM"
          />
          <input className="f6 eau-book bg-blue white br0 bn pa2 h-2 w-30" type="submit" value="SUBSCRIBE" />
        </form>
      </div>
    )
  }
}
