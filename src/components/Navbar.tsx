import { useState } from 'react'


const styles = {
  
  li: "bg-red-900/70 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 md:py-2 text-white hover:bg-red-800/60 hover:border-white/60 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-950/40 cursor-pointer",
  a: "text-white hover:text-red-100 font-medium"
};




const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
  <nav className='bg-red-950 px-4 py-3 md:py-5 text-white relative shadow-md shadow-red-950/40'>
      <div className='flex justify-between items-center mx-auto container max-w-screen-xl'>
      <img className='h-12 w-auto md:h-16 select-none' src='src/assets/CoffeLogo.png' alt='Coffee Bakery Logo' />

          {/* Hamburger Button (mobile) */}
          <button
            className='md:hidden flex flex-col justify-center gap-1.5 group'
            aria-label='Menü'
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span className={`h-0.5 w-6 bg-white transition-all ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>

          {/* Menu */}
          <ul
            className={`gap-3 md:flex items-center md:static md:opacity-100 md:visible md:translate-y-0 md:bg-transparent md:flex-row ${open ? 'flex flex-col absolute top-full left-0 w-full bg-red-950/95 backdrop-blur-md px-4 pt-4 pb-6 border-t border-red-800 shadow-xl space-y-3 animate-fadeIn' : 'hidden'}`}
          >
            <li className={styles.li}>
              <a href="#home" className={styles.a} onClick={() => setOpen(false)}>Anasayfa</a>
            </li>
            <li className={styles.li}>
              <a href="#products" className={styles.a} onClick={() => setOpen(false)}>Ürünlerimiz</a>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar