import { client } from '../../api/client'
import { GET_ALL_PROJECTS } from '../../api/queries/projects'
import ProjectsPage from '../../components/ProjectsPage/projects-page'

export async function getStaticProps() {
  const projects = await client.query({
    query: GET_ALL_PROJECTS,
  })

  return {
    props: {
      projects: projects.data || [],
      error: projects.error || null,
    },
    revalidate: 3600 * 3,
  }
}

export default function Projects(props) {
  return <ProjectsPage {...props} />
}
