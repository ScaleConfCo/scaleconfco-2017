import React from 'react'

const isClient = typeof window !== 'undefined'

export default class CFPRedirect extends React.Component {
  componentDidMount() {
    if (isClient) {
      window.location = 'https://www.papercall.io/scaleconfco'
    }
  }

  render() {
    return (<div>{ 'Redirecting' }</div>)
  }
}
