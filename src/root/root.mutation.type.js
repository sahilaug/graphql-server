import viewerMutationType from '../viewer/viewer.mutation.type';

const RootMutation = `
  type RootMutation {
    ${viewerMutationType}
  }
`;

export default RootMutation;
