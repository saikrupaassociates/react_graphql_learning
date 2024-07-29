import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from 'cors';
import express from 'express';
import { readFile } from 'node:fs/promises';
import { authMiddleware, handleLogin } from './auth.js';
import { resolvers } from './resolvers-product.js';
import { resolvers1 } from './resolvers-category.js';
import path from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 9000;

const app = express();
const staticPath = path.join(__dirname, 'static');

// Serve static files from the "static" directory
app.use('/static', express.static(staticPath));

//const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

//const typeDefs = await readFile('./schema.graphql', 'utf8');
const typeDefs1 = await readFile('./schema.graphql', 'utf8');


//const apolloServer = new ApolloServer({ typeDefs, resolvers});
   const apolloServer = new ApolloServer({ 
  schema: makeExecutableSchema ({
    typeDefs: [typeDefs1],
    resolvers: [resolvers, resolvers1],
  }),
});  

await apolloServer.start();
app.use('/graphql', apolloMiddleware(apolloServer));

app.listen({ port: PORT }, () => {

  console.log(`Static Path: ${staticPath}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/static`);
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});


/* 
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { authMiddleware, handleLogin } from './auth.js';
import { getUser } from './db/users.js';
import { typeDefs } from './schema/index.js';
import resolvers from './resolvers/index.js';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 9000;

const app = express();
const staticPath = path.join(__dirname, 'static');

// Serve static files from the "static" directory
app.use('/static', express.static(staticPath));

app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

async function getContext({ req }) {
  if (req.auth) {
    const user = await getUser(req.auth.sub);
    return { user };
  }
  return {};
}

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
app.use('/graphql', apolloMiddleware(apolloServer, { context: getContext }));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
  console.log(`Static files served at: http://localhost:${PORT}/static`);
});












 */