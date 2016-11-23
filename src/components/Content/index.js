import React, { PropTypes } from "react"

const Content = (props) => (
  <div>{ props.children }</div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
