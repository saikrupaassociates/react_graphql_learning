import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
//import { startStandaloneServer } from '@apollo/server/standalone';
import express from 'express';
import { readFile } from 'node:fs/promises';
import { productResolver} from './resolvers/product-resolver.js';
import { categoryResolver} from './resolvers/category-resolver.js';
import { category2ProductResolver } from './resolvers/category-product-resolver.js';
import { makeExecutableSchema } from '@graphql-tools/schema';

const PORT = 19001;
const pcmTypeDef = await readFile('./schema-def/product-category.graphql', 'utf-8');

const expressApp = express();
expressApp.use(express.json());
const schema = makeExecutableSchema({
    typeDefs:[pcmTypeDef],
    resolvers: [productResolver, categoryResolver, category2ProductResolver],
});

const apolloServer = new ApolloServer({schema});
await apolloServer.start();
expressApp.use('/graphql', apolloMiddleware(apolloServer));

expressApp.listen({ port: PORT }, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
  });



