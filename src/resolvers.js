import { merge } from 'lodash';
import RootQueryResolvers from './root/root.resolvers';
import RootMutationResolvers from './root/root.mutation.resolvers';

const internalResolvers = merge(/* merge all internal resolvers here */);

export default {
  RootQuery: RootQueryResolvers,
  RootMutation: RootMutationResolvers,
  ...internalResolvers,
};
