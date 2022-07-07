import styled from 'styled-components'
import Typography from '../Typography/typography'

const Styled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background:url('/bg_about.jpg') no-repeat center center fixed;
  background-size: cover;
`

Styled.wrapper = styled.div`
  display: flex;
  padding-top: 96px;
`

Styled.about = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.9rem;
  letter-spacing: 0.5px;
  max-width: 630px;
  opacity: 0.9;
  width: 50%;
  margin: 0 5%;
`
Styled.paragraph = styled.div`
  margin-bottom: 24px;
`

Styled.bold = styled.span`
  font-weight: 500;
`

Styled.separator = styled.div`
  height: 1px;
  background: white;
  opacity: 0.3;
  width: 20%;
  margin: 64px 0 16px 0;
`

Styled.links = styled.div`
  width: 30%;
  margin: 0 5%;
  opacity: 0.9;
`

Styled.contact = styled.div`
  display: flex;
  margin: 8px 0;
`

Styled.heading = styled.div`
  font-size: 40px;
  font-weight: 1000;
  min-width: 170px;
`

Styled.info = styled.div`
  opacity: 0.4;
  font-weight: 900;
  margin-top: 20px;
`

export default Styled
