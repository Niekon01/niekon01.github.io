import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Languages from './components/Languages';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Languages />
      <About />
    </div>
  );
}

export default App;
