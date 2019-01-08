const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const gameAPI = require('./datasources/game')
const promotionAPI = require('./datasources/promotion')
const vipAPI = require('./datasources/vip')

const GRAPHQL_PLAYGROUND_CONFIG = {
    settings: {
        'editor.cursorShape': 'line',
        'editor.fontSize': 14,
        'editor.reuseHeaders': true,
        'editor.theme': 'dark'
    }
};

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        gameAPI: new gameAPI(),
        promotionAPI: new promotionAPI(),
        vipAPI: new vipAPI()
    }),
    playground: process.env.NODE_ENV === 'production' ? false : GRAPHQL_PLAYGROUND_CONFIG
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});