const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const gameAPI = require('./datasources/game')

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        gameAPI: new gameAPI(),
    })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});