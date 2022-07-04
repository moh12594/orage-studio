import styled from 'styled-components'
import { lighten } from 'polished'
import Image from 'next/image'

const Styled = styled.nav`
  display: flex;
  font-size: 1.6rem;
  padding: 1.6rem;
  align-items: center;
  justify-content: space-between;
`

Styled.logo = styled(Image)`
  width: 20rem !important;
  height: 20rem !important;
`

Styled.logoWrapper = styled.a`
  padding: 1.6rem 0;
  width: 10rem;
`

Styled.navigations = styled.div`
  display: flex;
  align-items: center;
`

Styled.item = styled.a`
  padding: 1.6rem 0;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${lighten(0.5, '#ffffff')};
  }
`

export default Styled