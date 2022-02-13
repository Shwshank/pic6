const CLIENT_DOMAIN = config.domain;
const CLIENT_ID = config.client;
const SCOPE = 'openid profile offline_access';
const REDIRECT = 'http://localhost:3000/callback';
const HOME = 'http://localhost:3000/';

const auth = new auth0.WebAuth({
    domain: CLIENT_DOMAIN,
    clientID: CLIENT_ID,
  });

  auth.popup.authorize({
    responseType: 'token',
    redirectUri: REDIRECT,
    scope: SCOPE,
  })