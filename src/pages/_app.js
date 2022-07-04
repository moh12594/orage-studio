/* eslint-disable react/prop-types */
import { ApolloProvider } from '@apollo/client'
import dynamic from 'next/dynamic'
import { client } from '../api/client'
import GlobalStyles from '../utils/styles/global.styled'

const DynamicCursor = dynamic(() => import('../components/Cursor/cursor'), {
  ssr: false,
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
      <DynamicCursor />
    </ApolloProvider>
  )
}

export default MyApp
