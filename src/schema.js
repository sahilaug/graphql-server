import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import RootQueryType from './root/root.type';
import RootMutationType from './root/root.mutation.type';
import resolvers from './resolvers';
import mocks from './mocks';

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`;

const typeDefs = [SchemaDefinition, ...RootQueryType, RootMutationType];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });

export default schema;
