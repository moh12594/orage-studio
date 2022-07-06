import { client } from '../api/client'
import { GET_ALL_PROJECTS } from '../api/queries/projects'
import HomePage from '../components/HomePage/home-page'

export async function getStaticProps() {
  const projects = await client.query({
    query: GET_ALL_PROJECTS,
  })

  return {
    props: {
      projects: projects.data || [],
      error: projects.error || null,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 3600 * 3, // In seconds
  }
}

export default function Home(props) {
  return <HomePage {...props} />
}
