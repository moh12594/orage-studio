import styled from 'styled-components'
import { motion } from 'framer-motion'

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

Styled.projectItem = styled.a`
  align-items: center;
  display: flex;
  position: relative;
  justify-content: center;
  min-height: 40rem;
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