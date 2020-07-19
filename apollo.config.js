module.exports = {
  client: {
    includes: ['pages/**/*.ts[x]'],
    service: {
      name: 'api',
      url: 'http://127.0.0.1:3000/api/graphql',
    },
  },
}
