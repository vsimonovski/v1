import React from 'react';
import './App.css';
import 'normalize.css';
import 'wenk';
import Title from './components/title/Title';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <div className="content">
          <div className="content__inner">
            <Title />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
