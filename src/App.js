import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import 'normalize.css';
import 'wenk';
import Title from './components/title/Title';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { Content, ContentInner } from './App.style';
import { darkTheme } from './theme';

function App() {
  const [theme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
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
