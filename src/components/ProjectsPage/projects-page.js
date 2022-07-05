import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation/navigation'
import Heading from '../Heading/heading'
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../api/queries/categories'
import Styled from './projects-page.styled'

export default function ProjectsPage({ projects }) {
  const { data } = useQuery(GET_ALL_CATEGORIES)
  const [currentVideoPlaying, setCurrentVideoPlaying] = React.useState(null)

  return (
    <>
    <Head>
        <title>Orage studio - project page</title>
        <meta name="description" content="Orage studio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation categories={data?.categoriesCollection?.items} />
    {projects?.projectCollection?.items ? (
      <Styled>
        {projects.projectCollection.items.map((project) => (
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
              {currentVideoPlaying === project.title ? (
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
