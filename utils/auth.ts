import axios from 'axios';
import Cookies from 'js-cookie';

type UserData = {
  user: { id: string; email: string; username: string };
  jwt: string;
};

export const setToken = (response: UserData) => {
  if (typeof window === 'undefined') return;

  const {
    jwt,
    user: { id, email, username }
  } = response;

  Cookies.set('id', id);
  Cookies.set('email', email);
  Cookies.set('username', username);
  Cookies.set('jwt', jwt);
};

export const unsetToken = () => {
  if (typeof window === 'undefined') return;

  Cookies.remove('id');
  Cookies.remove('jwt');
  Cookies.remove('email');
};

export const getUserFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();

  if (jwt) {
    axios(`${process.env.STRAPI_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
      .then((res) => {
        return res.data.username;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
  return null;
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt');
};
