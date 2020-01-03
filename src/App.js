import React from 'react';
import './App.css';
import 'normalize.css';
import 'wenk';
import Title from './components/Title';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="content__inner">
          <Title />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
