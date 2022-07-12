import { client } from '../api/client'
import { GET_ALL_HIGHLIGHTED_PROJECTS } from '../api/queries/projects'
import HomePage from '../components/HomePage/home-page'

export async function getStaticProps() {
  const projects = await client.query({
    query: GET_ALL_HIGHLIGHTED_PROJECTS,
  })

  return {
    props: {
      projects: projects.data || [],
      error: projects.error || null,
    },
    revalidate: 3600 * 3,
  }
}

export default function Home(props) {
  return <HomePage {...props} />
}
