const express = require('express')
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const gameAPI = require('./datasources/game')
const promotionAPI = require('./datasources/promotion')
const vipAPI = require('./datasources/vip')
const indexRouter = require('./routers/index')

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        gameAPI: new gameAPI(),
        promotionAPI: new promotionAPI(),
        vipAPI: new vipAPI()
    }),
    context: ({req}) => {
        const authorization = (req.headers && req.headers.authorization) || '';
        return {
            authorization
        }
    },
    playground: process.env.NODE_ENV !== 'production'
});

const app = express()
app.use('/', indexRouter);

server.applyMiddleware({app})

app.listen(4000, () => {console.log(`🚀 Server ready at localhost:4000`);})

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });