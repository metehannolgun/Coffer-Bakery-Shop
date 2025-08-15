import { memo } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import type { Product } from '../redux/Api';

interface Props { product: Product }

// Tek sefer load (opsiyonel üst seviye: Layout veya Urunler'de bir kez sarmalayabilirsin)
const CardMotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);

const ProductCardBase = ({ product }: Props) => {
  return (
    <CardMotionProvider>
      <m.div
        className="group flex flex-col overflow-hidden rounded-lg border border-stone-200 bg-white p-3 text-sm shadow-sm will-change-transform transition-transform
                   dark:border-stone-700 dark:bg-stone-900"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.6 }}
      >
        <div className="relative mb-2 h-36 w-full overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.title}
            width={300}
            height={144}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-[1.04]"
          />
          <span className="absolute left-2 top-2 rounded-full bg-amber-500/90 px-2 py-0.5 text-[10px] font-medium tracking-wide text-white shadow-sm">
            {product.category}
          </span>
        </div>
        <h3 className="line-clamp-1 font-semibold text-stone-800 dark:text-stone-100">
          {product.title}
        </h3>
        <p className="line-clamp-2 text-xs text-stone-500 dark:text-stone-400">
          {product.description}
        </p>
      </m.div>
    </CardMotionProvider>
  );
};

export const ProductCard = memo(ProductCardBase);
export default ProductCard;
