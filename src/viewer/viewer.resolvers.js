const viewerQueryResolvers = {
  Viewer(rootObj, params, context) {
    if (!context.request.user) {
      return {
        id: 'guest',
      };
    }
    return {
      ...context.request.user,
    };
  },
};

export default viewerQueryResolvers;
