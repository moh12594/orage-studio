import { css } from 'styled-components'

export const UNIT = 'px'

export const SCREENS = {
  xSmall: 0,
  small: 768,
  medium: 1280,
  large: 1440,
}

export const BREAKPOINTS = {
  xSmall: `${SCREENS.xSmall}${UNIT}`,
  small: `${SCREENS.small}${UNIT}`,
  medium: `${SCREENS.medium}${UNIT}`,
  large: `${SCREENS.large}${UNIT}`,
}

// Usage: breakpoint.[breakpoint]`...<style here>...`
export const breakpoint = Object.keys(BREAKPOINTS).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${BREAKPOINTS[label]}) {
        ${css(...args)}
      }
    `
    return accumulator
  },
  {}
)
