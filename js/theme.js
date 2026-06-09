//THEME TOGGLE
//Switches between light and dark mode.

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  //Check for saved preference.
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀ Light';
  }

  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    toggle.textContent = isDark ? '☀ Light' : '☾ Dark';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});