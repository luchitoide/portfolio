import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Project';
import Contact from './components/Contact';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;