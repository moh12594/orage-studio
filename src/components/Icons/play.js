import React from 'react'
import styled from 'styled-components'

const StrokeSolid = styled.path`
  stroke-dashoffset: 0;
  stroke-dashArray: 300;
  stroke-width: 4px;
  transition: stroke-dashoffset 1s ease, 
              opacity 1s ease;
`

const Icon = styled.path`
  transform: scale(.8);
  transform-origin: 50% 50%;
  transition: transform 200ms ease-out;
`

const Styled = styled.svg`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 10;

  &:hover {
    ${StrokeSolid} {
      opacity: 1;
      stroke-dashoffset: 300;
    }
    ${Icon} {
      transform: scale(.9);
    }
  }
`

export default function Play(props) {
  return (
    <Styled version="1.1" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve" {...props}>
      <StrokeSolid fill="none" stroke="white"  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
        C97.3,23.7,75.7,2.3,49.9,2.5"/>
      <Icon fill="white" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"/>
    </Styled>
  )
}
