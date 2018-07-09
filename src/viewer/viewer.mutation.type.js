const viewerMutationType = `
  signup (
    email: String!,
    password: String!,
  ): Viewer
  login (
    email: String!,
    password: String!,
  ): Viewer
  loginWithFB (
    fbAccessToken: String!,
    fbID: String!,
  ) : Viewer
  logout : Viewer
`;

export default viewerMutationType;
