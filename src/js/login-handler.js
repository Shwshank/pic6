import { checkForLogin, authPupup, checkForlogout } from './auth';

const loginBtn = document.getElementById('login');

const signupnBtn = document.getElementById('signup');

const logoutBtn = document.getElementById('logout');

const uploadBtn = document.getElementById('upload');

const userName = document.getElementById('username');

const dialogClose = document.getElementById('dialog-close');

const dialogConfirm = document.getElementById('dialog-confirm');

const dialog = document.getElementById('dialog');

export function uesrLoggedIn() {
  logoutBtn.style.display = 'inline-block';
  uploadBtn.style.display = 'inline-block';
  loginBtn.style.display = 'none';
  signupnBtn.style.display = 'none';
}

// app logout function
export function uesrLoggedOut() {
  logoutBtn.style.display = 'none';
  uploadBtn.style.display = 'none';
  loginBtn.style.display = 'inline-block';
  signupnBtn.style.display = 'inline-block';
  userName.innerHTML = '';
}

dialogClose.addEventListener('click', function () {
  // set display none for dialog
  document.getElementById('dialog').style.display = 'none';
});

loginBtn.addEventListener('click', function () {
  authPupup();
});

signupnBtn.addEventListener('click', function () {
  authPupup();
});

logoutBtn.addEventListener('click', function () {
  document.getElementById('dialog-text').innerHTML = 'Are you sure to logout?';

  dialog.style.display = 'flex';

  dialogClose.addEventListener('click', function () {
    dialog.style.display = 'none';
  });

  dialogConfirm.addEventListener('click', function () {
    dialog.style.display = 'none';
    if (checkForlogout()) {
      uesrLoggedOut();
    }
  });
});

// check for user login status
// cehckForLogin will be undefined in case of user logged in
if (checkForLogin() === false) {
  console.log(' Logged out ');
  uesrLoggedOut();
} else {
  uesrLoggedIn();
}
