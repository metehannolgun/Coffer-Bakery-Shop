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
    <section id='products' className='mx-auto max-w-6xl px-4 py-10'>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Ürünler</h2>
        <CategoryToggleButton />
      </div>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
        
      </div>
      
    </section>
  )
}

export default Urunler