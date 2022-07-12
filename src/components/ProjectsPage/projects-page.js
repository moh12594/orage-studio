import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation/navigation'
import Heading from '../Heading/heading'
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../api/queries/categories'
import Styled from './projects-page.styled'
import { client } from '../../api/client'
import { GET_ALL_PROJECTS, GET_PROJECTS_BY_FILTER } from '../../api/queries/projects'

export default function ProjectsPage({ projects }) {
  const { data } = useQuery(GET_ALL_CATEGORIES)
  const [localProjects, setLocalProjects] = React.useState(projects)
  const [currentVideoPlaying, setCurrentVideoPlaying] = React.useState(null)

  React.useEffect(() => {
    if (projects?.length > 0) {
      setLocalProjects(projects)
    }
  }, [projects])

  const onFilterProjects = async (filter) => {
    if (filter === 'all') {
      const projects = await client.query({
        query: GET_ALL_PROJECTS,
      })
      return setLocalProjects(projects?.data || [])
    }
    const projects = await client.query({
      query: GET_PROJECTS_BY_FILTER,
      variables: { filter }
    })
    return setLocalProjects(projects?.data || [])
  }

  return (
    <>
    <Head>
        <title>Orage studio - project page</title>
        <meta name="description" content="Orage studio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation
      categories={data?.categoriesCollection?.items}
      onFilterProjects={onFilterProjects}
    />
    {localProjects?.projectCollection?.items ? (
      <Styled
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {localProjects.projectCollection.items.map((project) => (
          <Link key={project.sys.id} href={`/projects/${project.sys.id}`}>
            <Styled.projectItem
              onMouseEnter={() => {
                setCurrentVideoPlaying(project.title)
              }}
              onMouseLeave={() => {
                setCurrentVideoPlaying(null)
              }}
            >
              <Styled.coverImage
                src={project.cover.url}
                alt={project.title}
                width={500}
                height={500}
              />
              {project.video?.url && currentVideoPlaying === project.title ? (
                <Styled.video
                  src={project.video.url}
                  poster={project.cover.url}
                  height={500}
                  width={500}
                  autoPlay
                  muted
                />
              ) : null}
              <Heading>{project.title}</Heading>
            </Styled.projectItem>
          </Link>
        ))}
      </Styled>
    ) : null}
    </>
  )
}

ProjectsPage.propTypes = {
  projects: PropTypes.object,
}
