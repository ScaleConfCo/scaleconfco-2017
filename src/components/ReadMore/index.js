import React, { PropTypes, Component } from 'react'
// import Truncate from 'react-truncate'

let Truncate
if (typeof window !== 'undefined') {
  Truncate = require('react-truncate')
}

class ReadMore extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            expanded: false,
            truncated: false
        }

        this.handleTruncate = this.handleTruncate.bind(this)
        this.toggleLines = this.toggleLines.bind(this)
    }

    handleTruncate(truncated) {
        this.setState({
            truncated
        });
    }

    toggleLines(event) {
        event.preventDefault();

        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const {
            children,
            more,
            less,
            lines
        } = this.props

        const {
            expanded,
            truncated
        } = this.state

        return (
            <p>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(
                      <span>...<br/><a className="open-sans bright-green no-underline" href="#" onClick={this.toggleLines}>{more}</a></span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <span><br/><a className="open-sans bright-green no-underline" href="#" onClick={this.toggleLines}>{less}</a></span>
                )}
            </p>
        );
    }
}

ReadMore.defaultProps = {
    lines: 1,
    more: 'Read more',
    less: 'Show less'
};

ReadMore.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.node,
    more: PropTypes.string,
    less: PropTypes.string,
    lines: PropTypes.number
};

export default ReadMore