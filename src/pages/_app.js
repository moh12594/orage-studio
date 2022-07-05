/* eslint-disable react/prop-types */
import { ApolloProvider } from '@apollo/client'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'styled-components'
import { client } from '../api/client'
import GlobalStyles from '../utils/styles/global.styled'
import { theme } from '../utils/styles/theme'

const DynamicCursor = dynamic(() => import('../components/Cursor/cursor'), {
  ssr: false,
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <DynamicCursor />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
