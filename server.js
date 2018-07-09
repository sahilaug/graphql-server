import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'express-jwt';
import { JWTSecret } from './config';
import schema from './src/schema';

require('dotenv').config();

const graphQLServer = express();
graphQLServer.use(cors());
graphQLServer.use(cookieParser());

graphQLServer.use(jwt({
  secret: JWTSecret,
  credentialsRequired: false,
  getToken: (req) => {
    const token = req.cookies.authToken || req.headers.authorization;
    if (token) {
      return token;
    }
    return null;
  },
}));

graphQLServer.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress((request, response) => ({
    schema,
    context: {
      request,
      response,
    },
  })),
);

graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const GRAPHQL_PORT = process.env.PORT;

graphQLServer.listen(GRAPHQL_PORT, () => {
  // eslint-disable-next-line
  console.log('GraphiQL is now running on ', GRAPHQL_PORT);
});
