import { gql } from '@apollo/client'

export const GET_ALL_PROJECTS = gql`
query GetAllProjects {
  projectCollection(order: priority_ASC) {
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

export const GET_ALL_HIGHLIGHTED_PROJECTS = gql`
query GetAllHighlightedProjects {
  projectCollection(where: {
    visibleInHomePage: true
    video_exists: true
  }, order: priority_ASC) {
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

export const GET_PROJECTS_BY_FILTER = gql`
query Projects($filter: String!) {
  projectCollection(where: {
    categories: {
      label_contains: $filter
    }
  }) {
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

export const GET_PROJECT_BY_ID = gql`
  query Project($id: String!) {
    project(id: $id) {
      sys {
        id
      }
      categories {
        label
      }
      imagesCollection {
        items {
          url
          height
          width
          title
          contentType
        }
      }
      title
      details
      credits
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
`