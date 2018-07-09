import jwt from 'jsonwebtoken';
// eslint-disable-next-line
import axios from "axios";
import { JWTSecret } from '../../config';

const signup = async ({ email, password }) => {
  const user = { id: email, email, password };
  user.authToken = jwt.sign(user, JWTSecret);
  return user;
};

const login = async ({ email, password }) => {
  const user = { id: email, email, password };
  user.authToken = jwt.sign(user, JWTSecret);
  return user;
};

const loginWithFacebook = async ({ fbAccessToken, fbID }) => {
  const user = { id: fbID, fbAccessToken, fbID };
  user.authToken = jwt.sign(user, JWTSecret);
  return user;
};

module.exports = {
  signup,
  login,
  loginWithFacebook,
};
