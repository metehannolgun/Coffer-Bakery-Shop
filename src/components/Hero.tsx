import React from 'react'

const Hero = () => {
  return (
  <section id='home' className='min-h-screen flex items-center justify-center relative overflow-hidden ' >
     <img src='src/assets/hero-bg.jpg' alt='Coffee Bakery Hero Background' className='absolute inset-0 w-full h-full object-cover opacity-85' />
      {/* Koyu overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      {/*Metin içerik */}
    <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Taze Kahve & Lezzetli Tatlılar
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-semibold">
          Güne enerjik başlamak için sıcak kahve ve fırından yeni çıkmış tatlılarımızı keşfedin.
        </p>
        <a
          href="#products"
          className="bg-gradient-to-br from-red-900 to-gray-400 text-white hover:from-red-800 hover:to-gray-300 hover:text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-red-950/40"
        >
          Ürünleri Keşfet
        </a>
      </div>
    </section>
  )
}

export default Hero