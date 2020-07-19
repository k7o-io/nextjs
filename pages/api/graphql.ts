import { ApolloServer } from 'apollo-server-micro'
import { typeDefs, resolvers } from '@/gql'

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
