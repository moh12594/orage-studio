import React from 'react'
import Styled from './cursor.styled'

export default function Cursor() {
  const [coordinates, setCoordinates] = React.useState(null)

  const onMouseMove = (event) => {
    window.requestAnimationFrame(() => {
      setCoordinates({
        x: event.pageX,
        y: event.pageY
      })
    })
  }

  React.useLayoutEffect(() => {
    document.addEventListener('mousemove', onMouseMove)

    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  return coordinates ? (
    <Styled
      style={{
        position: 'absolute',
        left: coordinates.x + 16,
        top: coordinates.y + 8,
      }}
    >
      <p>{`y${coordinates.y}`}</p>
      <p>{`x${coordinates.x}`}</p>
    </Styled>
  ) : null
}
