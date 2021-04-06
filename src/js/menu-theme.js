import refs from './refs'; 
   const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  refs.body.classList.add(
    localStorage.getItem('theme') === null
      ? Theme.LIGHT
      : localStorage.getItem('theme'),
  );
  refs.input.checked = localStorage.getItem('theme') === Theme.DARK;
  
  
  refs.input.addEventListener('change', inputChangeOn);
  
  function changeTheme(add, rem) {
    refs.body.classList.replace(rem, add);
    localStorage.setItem('theme', add);
  }
  
  function inputChangeOn({ target }) {
    target.checked
      ? changeTheme(Theme.DARK, Theme.LIGHT)
      : changeTheme(Theme.LIGHT, Theme.DARK);
  } 
