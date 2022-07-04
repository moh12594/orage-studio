import { gql } from '@apollo/client'

export const GET_ALL_PROJECTS = gql`
{
  projectCollection {
    items {
      sys {
        id
      }
      title
      details
      video {
        title
        description
        fileName
        url
      }
    }
  }
}
`
