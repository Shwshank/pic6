import {config} from './auth0-creds.js'
// eslint-disable-next-line no-undef
const CLIENT_DOMAIN = config.domain;

// eslint-disable-next-line no-undef
const CLIENT_ID = config.client;
const SCOPE = 'openid profile offline_access';
const REDIRECT = 'http://localhost:3000/callback.html';
const HOME = 'http://localhost:3000/';

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
      // Now we have the user's information
      console.log(user);
      userName.innerHTML = user.name;
      return true
    });
  } else {
    return false
  }
}

// store token in localstorage then close window containing callback url
export function getHash() {
  const params = new URLSearchParams(window.location.hash);
  localStorage.setItem('accessToken', params.get('#access_token') + '');
  window.close();
}

export function checkForlogout() {
  localStorage.removeItem('accessToken')
  auth.logout({
    returnTo: HOME,
    clientID: CLIENT_ID,
  });
  userName.innerHTML = ''
  return true
}
