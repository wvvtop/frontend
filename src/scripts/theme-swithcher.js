/* eslint-env browser */

const lightStyle = document.getElementById('light-theme');
const darkStyle = document.getElementById('dark-theme');
const toggle = document.getElementById('theme-toggle');

if (toggle && lightStyle && darkStyle) {
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }

    toggle.addEventListener('click', () => {
      const nextTheme = lightStyle.disabled ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      darkStyle.disabled = false;
      lightStyle.disabled = true;
      toggle.textContent = '🌞';
      document.documentElement.style.colorScheme = 'dark';
    } else {
      darkStyle.disabled = true;
      lightStyle.disabled = false;
      toggle.textContent = '🌙';
      document.documentElement.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }
}
