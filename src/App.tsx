import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Urunler from './components/Urunler'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
  <Urunler />
  <Footer />
    </>
  )
}

export default App