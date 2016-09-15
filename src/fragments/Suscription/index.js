import React, { Component } from 'react'
import styles from './index.css'

export default class Suscription extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <h2 className={ styles.title }>{ 'Join our mailing list' }</h2>
        <form
          className={ styles.form }
          action="//scaleconfco.us13.list-manage.com/subscribe/post?u=5e496acbac5eeec4a22312bd0&amp;id=96c6dc44ae"
          method="post"
        >
          <input
            className={ styles.input }
            type="email"
            name="EMAIL"
            placeholder="YOU@EMAIL.COM"
          />
          <input className={ styles.submit } type="submit" value="SUBSCRIBE" />
        </form>
      </div>
    )
  }
}
