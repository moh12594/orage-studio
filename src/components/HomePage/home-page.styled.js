import styled from 'styled-components'
import Typography from '../Typography/typography'

const Styled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

Styled.details = styled(Typography)`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  margin: 0.8rem 0;
`

Styled.detailsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 2rem;

  &:hover {
    ${Styled.details} {
      opacity: 1;
    }
  }
`

Styled.progressBars = styled.ul`
  position: absolute;
  bottom: 5rem;
  left: 2rem;
  display: flex;
`

Styled.progressBar = styled.li`
  display: block;
  position: relative;
  list-style: none;
  border: ${({ theme }) => theme.colors.light} 0.1rem solid;
  height: 2.4rem;
  width: 0.4rem;
  border-radius: 0.8rem;
  margin-right: 1.6rem;
  cursor: pointer;

  &:after {
    position: absolute;
    bottom: 0;
    content: '';
    background-color: ${({ $isSelected, theme }) => $isSelected ? theme.colors.light : 'transparent'};
    height: ${({ $progressValue }) => `${$progressValue}%`};
    width: 100%;
  }

`

export default Styled