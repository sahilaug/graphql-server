import UserService from '../user/user.service';

const viewerMutationResolvers = {
  async signup(rootObj, { email, password }, context) {
    const user = await UserService.signup({ email, password });
    context.response.cookie('authToken', user.authToken, { httpOnly: true });
    return user;
  },

  async loginWithFB(rootObj, { fbAccessToken, fbID }, context) {
    const user = await UserService.loginWithFacebook({
      fbAccessToken,
      fbID,
    });
    if (user) {
      context.response.cookie('authToken', user.authToken, {
        httpOnly: true,
      });
    }
    return user;
  },

  async login(rootObj, { email, password }, context) {
    const user = await UserService.login({ email, password });
    if (user) {
      context.response.cookie('authToken', user.authToken, {
        httpOnly: true,
      });
    }
    return user;
  },

  async logout(rootObj, params, context) {
    context.response.cookie('authToken', '');
    return {
      id: 'guest',
    };
  },
};

export default viewerMutationResolvers;
