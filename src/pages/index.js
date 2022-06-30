import Head from 'next/head'
import Navigation from '../components/Navigation/navigation'

export default function Home() {
  return (
    <>
    <Head>
        <title>Orage studio - home page</title>
        <meta name="description" content="Orage studio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />
    <p>Hello home page</p>
    </>
  )
}
