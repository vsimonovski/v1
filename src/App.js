import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import 'normalize.css';
import 'wenk';
import Title from './components/title/Title';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { Content, ContentInner } from './App.style';
import { darkTheme, lightTheme, ACTIVE_THEME } from './theme';
import ThemeToggle from './components/theme-toggle/ThemeToggle';
import {
  getActiveThemeFromLocalStorage,
  setActiveThemeToLocalStorage
} from './App.util';

function App() {
  const activeTheme = getActiveThemeFromLocalStorage();
  const [theme, setActiveTheme] = useState(
    activeTheme === ACTIVE_THEME.DARK ? darkTheme : lightTheme
  );

  function onThemeChange() {
    if (theme.NAME === ACTIVE_THEME.DARK) {
      setActiveThemeToLocalStorage(ACTIVE_THEME.LIGHT);
      return setActiveTheme(lightTheme);
    }

    setActiveThemeToLocalStorage(ACTIVE_THEME.DARK);
    return setActiveTheme(darkTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeToggle changeTheme={onThemeChange} theme={theme} />
      <div className="App">
        <Content>
          <ContentInner>
            <Title />
            <About />
            <Contact />
          </ContentInner>
        </Content>
      </div>
    </ThemeProvider>
  );
}

export default App;
