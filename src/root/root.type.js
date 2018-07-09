import Viewer from '../viewer/viewer.type';

const RootQuery = `
  type RootQuery {
    Viewer: Viewer
  }
`;

export default [RootQuery, ...Viewer];
