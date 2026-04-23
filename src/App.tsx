import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
