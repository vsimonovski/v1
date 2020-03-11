import { ACTIVE_THEME } from './theme';

function getActiveThemeFromLocalStorage() {
  return localStorage.getItem('activeTheme') || ACTIVE_THEME.DARK;
}

function setActiveThemeToLocalStorage(activeThemeValue) {
  localStorage.setItem('activeTheme', activeThemeValue);
}

export { getActiveThemeFromLocalStorage, setActiveThemeToLocalStorage };
