const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const gameAPI = require('./datasources/game')
const promotionAPI = require('./datasources/promotion')
const vipAPI = require('./datasources/vip')

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        gameAPI: new gameAPI(),
        promotionAPI: new promotionAPI(),
        vipAPI: new vipAPI()
    })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});