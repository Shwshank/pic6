const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const themeBtn = document.getElementById('theme');

const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
    document.body.classList.toggle('dark-theme');
  } else if (currentTheme == 'light') {
    document.body.classList.toggle('light-theme');
  }
  
  themeBtn.addEventListener('click', function () {
    if (prefersDarkScheme.matches) {
      var theme;
      document.body.classList.toggle('light-theme');
      theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    } else {
      document.body.classList.toggle('dark-theme');
      theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    }
    localStorage.setItem('theme', theme);
  });