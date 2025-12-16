import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Menus from './components/Menus/Menus.jsx'
import Banner from './components/Banners/Banner.jsx'
import Banner2 from './components/Banners/Banner2.jsx'
import Banner3 from './components/Banners/Banner3.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
        
      </main>
    </>
  );
};

export default App;