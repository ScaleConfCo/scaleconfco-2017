import React, { PropTypes } from "react"

const Container = (props) => (
  <div>{ props.children }</div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
