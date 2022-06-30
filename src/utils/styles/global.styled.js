import { createGlobalStyle } from 'styled-components'
import APP from './app'
import RESET from './reset'
import TYPOGRAPHY from './typography'

const globalStyles = RESET
  + TYPOGRAPHY
  + APP

/**
 * Global styles
 */

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`

export default GlobalStyles
