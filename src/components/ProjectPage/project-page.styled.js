import styled from 'styled-components'
import Arrow from '../Icons/arrow'
import Typography from '../Typography/typography'

const Styled = styled.div`
  padding: 0 6.4rem;
`

Styled.details = styled.div`
  display: flex;
  height: calc(100vh - 164px);
  position: relative;
`

Styled.still = styled.div`
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
  bottom: 1.2rem;
  margin: 0 auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`

Styled.arrowMore = styled(Arrow)`
  height: 25px;
  width: 25px;
  margin-top: 10px;
`


Styled.makingOf = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(30rem, 1fr));
  grid-gap: 1.6rem;
  padding: 3.2rem 0 8rem;
`

export default Styled