import { ApolloClient, InMemoryCache } from '@apollo/client'

const SPACE_ID = 'hgp35hu36067'

export const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_SECRET}`
  }
})
