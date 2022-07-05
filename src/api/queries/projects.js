import { gql } from '@apollo/client'

export const GET_ALL_PROJECTS = gql`
{
  projectCollection {
    items {
      sys {
        id
      }
      categories {
        label
      }
      title
      details
      cover {
        url
      }
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
