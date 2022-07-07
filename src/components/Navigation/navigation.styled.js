import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Arrow from '../Icons/arrow'

const Styled = styled.nav`
  display: flex;
  font-size: 1.6rem;
  padding: 1.6rem 3.4rem;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
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
  position: relative;
  z-index: 3;
`

Styled.prefix = styled.span`
  padding: 1.6rem 0;
  color: ${({ theme }) => theme.colors.grey};
  cursor: default;
`

Styled.links = styled.div`
  display: flex;
  flex-direction: column;
`

Styled.item = styled.a`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  cursor: pointer;
  transition: color 0.3s;
  text-transform: uppercase;
  color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.light : theme.colors.grey)};
  order: ${({ $isSelected }) => ($isSelected ? 1 : 2)};
  display: ${({ $isExtended, $isSelected }) => (($isExtended || $isSelected) ? 'initial' : 'none')};
  z-index: 3;

  &:hover {
    color: ${({ theme }) => theme.colors.light};
  }
`

Styled.dropdown = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 4rem;
`

Styled.arrowDropdown = styled(Arrow)`
  margin-left: 0.4rem;
`

export default Styled