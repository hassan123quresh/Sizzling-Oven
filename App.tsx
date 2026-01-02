import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import MenuSection from './components/MenuSection';
import ServicesSection from './components/ServicesSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
        <MenuSection />
        <ServicesSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;