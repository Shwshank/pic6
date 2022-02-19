import '../style.css';
import * as auth0 from 'auth0-js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

console.log(auth0);
console.log(process.env.AUTH0_DOMAIN);
console.log(process.env.AUTH0_CLIENT);
console.log(process.env.REDIRECT);
console.log(process.env.HOME);

const CLIENT_DOMAIN = process.env.AUTH0_DOMAIN;
const CLIENT_ID = process.env.AUTH0_CLIENT;
const REDIRECT = process.env.REDIRECT;
const HOME = process.env.HOME;
const SCOPE = 'openid profile offline_access';

const userName = document.getElementById('username');

// eslint-disable-next-line no-undef
const auth = new auth0.WebAuth({
  domain: CLIENT_DOMAIN,
  clientID: CLIENT_ID,
});

// popup login box
export function authPupup() {
  auth.popup.authorize(
    {
      responseType: 'token',
      redirectUri: REDIRECT,
      scope: SCOPE,
    },
    function (err, authResult) {
      // after callback url closed
      window.location.reload();
    }
  );
}

export function checkForLogin() {
  let token = localStorage.getItem('accessToken');
  if (token) {
    auth.client.userInfo(token, function (err, user) {
      console.log(user);
      if (user) {
        userName.innerHTML = user.name;
        return true;
      } else {
        return false;
      }
    });
  } else {
    return false;
  }
}

// store token in localstorage then close window containing callback url

export function checkForlogout() {
  localStorage.removeItem('accessToken');
  auth.logout({
    returnTo: HOME,
    clientID: CLIENT_ID,
  });
  userName.innerHTML = '';
  return true;
}
