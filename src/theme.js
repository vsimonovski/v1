export const ACTIVE_THEME = {
  DARK: 'DARK_THEME',
  LIGHT: 'LIGHT_THEME'
};

export const darkTheme = {
  NAME: ACTIVE_THEME.DARK,
  bgLineColor: '#0068fa',
  textColor: '#828997',
  textHighlight: '#ffca22',
  bgColor: '#1b1c1f',
  titleTextColor: '#fff'
};

export const lightTheme = {
  ...darkTheme,
  NAME: ACTIVE_THEME.LIGHT,
  bgColor: darkTheme.titleTextColor,
  titleTextColor: darkTheme.bgColor,
  bgLineColor: darkTheme.textHighlight,
  textHighlight: darkTheme.bgLineColor
};
