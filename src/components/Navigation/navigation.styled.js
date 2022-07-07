import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Arrow from '../Icons/arrow'

const Styled = styled.nav`
  display: flex;
  font-size: 1.3rem;
  padding: 1.6rem 15rem 1.6rem 5%;
  align-items: center;
  justify-content: space-between;
  font-weight: 1000;
`

Styled.logo = styled(Image)`
  width: 10rem !important;
  height: 10rem !important;
`

Styled.logoWrapper = styled.a`
  padding: 1.6rem 0;
  width: 7rem;
  cursor: pointer;
`

Styled.navigations = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
  letter-spacing: 6px;
`

Styled.prefix = styled.span`
  padding: 1.6rem 0;
  color: ${({ theme }) => theme.colors.grey};
  cursor: default;
`

Styled.links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4px;
`

Styled.item = styled.a`
  display: flex;
  align-items: center;
  padding: 0.6rem 0;
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
  top: 3.7rem;
`

Styled.arrowDropdown = styled(Arrow)`
  margin: 0 0.8rem 0 0.4rem;
  padding-top: 0.6rem;
  width: 10px;
`

export default Styled
