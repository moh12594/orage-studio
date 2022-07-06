import styled from 'styled-components'
import Typography from '../Typography/typography'

const Styled = styled.div`
  padding: 0 6.4rem;
`

Styled.details = styled.div`
  display: flex;
  height: calc(100vh - 164px);
  position: relative;
`

Styled.videoContainer = styled.div`
  display: block;
  width: 50%;
  text-transform: uppercase;
`

Styled.video = styled.video`
  width: 100%;
`

Styled.credits = styled(Typography)`
  width: 50%;
  padding: 1.6rem 3.6rem;
`

Styled.showMore = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3.6rem;
  margin: 0 auto;
  width: fit-content;
`

Styled.makingOf = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30rem 30rem;
  grid-gap: 0.8rem;
  padding: 3.2rem 0 8rem;
`

export default Styled