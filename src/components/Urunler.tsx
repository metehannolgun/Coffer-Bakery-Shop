import { useGetProductsQuery } from '../redux/Api'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/Store';
import CategoryToggleButton from './CategoryToggleButton';


const Urunler = () => {
  const { data: products = [] } = useGetProductsQuery();

  const category = useSelector((s: RootState) => s.category);
  const filtered = category === 'bakery'
    ? products.filter(p => p.category === 'bakery')
    : products;

  return (
    <section id='products' className='relative overflow-hidden py-16'>
      {/* Arka plan görseli  */}
      <img
        src='src/assets/Urunler.bg.jpeg'
        alt='Ürünler Arka Plan'
        className='absolute inset-0 w-full h-full object-cover opacity-80'
        draggable='false'
      />
      {/* Koyu overlay  */}
      <div className='absolute inset-0 bg-black/50'></div>

      <div className='relative z-10 mx-auto max-w-6xl px-4'>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-white drop-shadow">Ürünler</h2>
          <CategoryToggleButton />
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Urunler