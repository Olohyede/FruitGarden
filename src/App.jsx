import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Menus from './components/Menus/Menus.jsx'
import Banner from './components/Banners/Banner.jsx'

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        
      </main>
    </>
  );
};

export default App;