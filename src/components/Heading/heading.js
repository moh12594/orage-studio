import PropTypes from 'prop-types'
import React from 'react'
import Styled from './heading.styled'

export default function Heading({
  children,
  className,
}) {
  return (
    <Styled className={className}>{children}</Styled>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Heading.defaultProps = {
  className: null,
}