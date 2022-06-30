import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation/navigation'

const projects = [
  { id: 1, name: 'project 1' },
  { id: 2, name: 'project 2' },
  { id: 3, name: 'project 3' },
  { id: 4, name: 'project 4' },
]

export default function Projects() {
  return (
    <>
    <Head>
        <title>Orage studio - project page</title>
        <meta name="description" content="Orage studio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />
    <div>
      <p>Hello project page</p>
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`}><a>{project.name}</a></Link>
      ))}
    </div>
    </>
  )
}
