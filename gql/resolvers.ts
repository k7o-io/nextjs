import { Resolvers } from './resolvers.types'

export const resolvers: Resolvers = {
  Query: {
    helloWorld: (): string => {
      return 'Hello World !'
    },
  },
}
