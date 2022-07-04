import PropTypes from 'prop-types'
import React from 'react'
import Styled from './typography.styled'

export default function Typography({
  children,
  className,
}) {
  return (
    <Styled className={className}>{children}</Styled>
  )
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Typography.defaultProps = {
  className: null,
}
