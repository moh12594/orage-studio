import Cursor from '../components/Cursor/cursor'
import GlobalStyles from '../utils/styles/global.styled'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Cursor />
    </>
  )
}

export default MyApp
