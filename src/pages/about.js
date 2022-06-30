import Head from 'next/head'
import Navigation from '../components/Navigation/navigation'

export default function About() {
  return (
    <>
    <Head>
        <title>Orage studio - about page</title>
        <meta name="description" content="Orage studio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />
    <p>Hello about page</p>
    </>
  )
}
