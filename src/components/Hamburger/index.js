import React, { PropTypes } from 'react';

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <a onClick={this.props.onClick} className="white f1 tr db pr3 pt2">&#9776;</a>
      </div>
    );
  }
}

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired
}
