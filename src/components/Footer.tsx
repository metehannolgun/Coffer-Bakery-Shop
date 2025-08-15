import React from 'react'

// Placeholder footer structure – içerikler daha sonra doldurulacak.
// Not: Tailwind sınıfları Navbar ile uyumlu koyu kırmızı palet kullanır.
const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-red-950 text-white pt-12  relative overflow-hidden">
      {/* Hafif üst dekor (ileride gradient veya SVG eklenebilir) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] select-none" aria-hidden="true"></div>

      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid gap-12 md:gap-10 md:grid-cols-3">
          {/* 1) Logo & Intro */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="src/assets/CoffeLogo.png"
                alt="Coffee Bakery Logo"
                className="h-12 w-auto select-none"
                draggable="false"
              />
              <span className="font-semibold text-lg tracking-wide">Coffee Bakery</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-red-200/80">
              {/* Placeholder açıklama metni  */}
              <span className="opacity-70"> Taze kahve & el yapımı lezzetler.</span>
            </p>
           
          </div>

          {/* 2) Menü */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-red-100/90">Menü</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-red-200/80 hover:text-white transition-colors">Anasayfa</a>
                </li>
                <li>
                  <a href="#products" className="text-red-200/80 hover:text-white transition-colors">Ürünler</a>
                </li>
              </ul>
            </div>

          {/* 3) İletişim & Sosyal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-100/90">İletişim & Sosyal</h3>
            <ul className="mt-4 space-y-2 text-sm text-red-200/80">
              <li><span className="opacity-60">Adres: Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas, excepturi quisquam explicabo porro delectus dolore saepe. Voluptates amet deleniti molestias iste, distinctio pariatur? Laboriosam ipsum tempora sint ipsa excepturi!</span></li>
              <li><span className="opacity-60">Tel: (555) 555 55 55</span></li>
              <li><span className="opacity-60">E-posta: info@example.com</span></li>
            </ul>
            <div className="mt-4 flex gap-3">
              {/* Sosyal ikonlar */}
              <a
                href="#"
                aria-label="Instagram"
                className="group h-10 w-10 rounded-full bg-red-900/60 hover:bg-red-800/70 flex items-center justify-center border border-white/10 hover:border-white/40 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-red-100/90 group-hover:text-white transition"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5.25-3.8a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="group h-10 w-10 rounded-full bg-red-900/60 hover:bg-red-800/70 flex items-center justify-center border border-white/10 hover:border-white/40 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-red-100/90 group-hover:text-white transition"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.5 9H16l.5-3h-3V4.75C13.5 3.784 13.784 3.5 14.75 3.5H16V1c-1.155-.046-2.311.03-3.46.23C10.87 1.584 10 2.845 10 4.65V6H7.5v3H10v9h3.5V9Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="group h-10 w-10 rounded-full bg-red-900/60 hover:bg-red-800/70 flex items-center justify-center border border-white/10 hover:border-white/40 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-red-100/90 group-hover:text-white transition"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2h3.308l-7.227 8.26L23.5 22h-6.554l-5.12-6.646L5.74 22H2.43l7.73-8.845L.5 2h6.72l4.62 6.06L18.244 2Zm-1.16 17.94h1.833L7.01 3.94H5.05l12.034 16Z" />
                </svg>
              </a>
            </div>
            {/* İleride newsletter formu eklenebilir */}
          </div>
        </div>

        {/* Alt Çizgi / Telif */}
        <div className="mt-12 border-t border-white/10 py-5 text-xs flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-red-200/70">
          <span>© {year} Coffee Bakery. Tüm hakları saklıdır.</span>
          <span className="flex items-center gap-1">
            <span>Made with</span>
            <span className="text-red-400">♥</span>
            <span className="opacity-60">metehannolgun</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer