import styled from 'styled-components'
import { motion } from 'framer-motion'
import Heading from '../Heading/heading'
import Typography from '../Typography/typography'

const Styled = styled(motion.main)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr auto 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

Styled.category = styled(Typography)`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`

Styled.title = styled(Heading)``

Styled.projectItem = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  min-height: 40rem;
  cursor: pointer;

  &:hover {
    ${Styled.category} {
      opacity: 1;
    }
  }
`

Styled.coverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
  z-index: -2;
  width: 100%;
  height: 100%;
`

Styled.video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
  z-index: -1;
  width: 100%;
  height: 100%;
`

export default Styled