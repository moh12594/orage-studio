import styled from 'styled-components'
import { lighten } from 'polished'

const Styled = styled.nav`
  diplay: flex;
  font-size: 1.6rem;
  padding: 1.6rem;
`

Styled.item = styled.a`
  padding: 1.6rem 0;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${lighten(0.5, 'black')};
  }

  &:after {
    content: '|';
    margin: 0 0.8rem;
  }
`

export default Styled