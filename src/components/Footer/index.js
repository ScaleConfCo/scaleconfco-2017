import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="tc pv3 gradient">
        <a
          href="/"
          className="no-underline white"
        >
          ScaleConf Colombia | Colombia 2017 {String.fromCharCode(169)}
        </a>
      </footer>
    )
  }
}
