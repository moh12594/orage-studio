import PropTypes from 'prop-types'
import React from 'react'
import { client } from '../../api/client'
import { GET_PROJECT_BY_ID } from '../../api/queries/projects'
import ProjectPage from '../../components/ProjectPage/project-page'



export async function getStaticProps(context) {
  const project = await client.query({
    query: GET_PROJECT_BY_ID,
    variables: { id: context.params.id }
  })

  return {
    props: {
      project: project.data?.project || [],
      error: project.error || null,
    },
  }
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

const Project = (props) => <ProjectPage {...props} />

Project.propTypes = {
  project: PropTypes.object,
}

export default Project
