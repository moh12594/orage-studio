import PropTypes from 'prop-types'
import React from 'react'
import Styled from './video-player.styled'

export default function VideoPlayer({
  id,
  src,
  poster,
}) {
  return (
    <Styled
      key={id}
      src={src}
      height={500}
      width={500}
      poster={poster}
      autoPlay
      muted
      loop
    />
  )
}

VideoPlayer.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  poster: PropTypes.string,
}