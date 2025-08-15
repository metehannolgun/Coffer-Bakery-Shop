// src/components/CategoryToggleButton.tsx
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/Store';
import { setCategory } from '../redux/categorySlice';

const CategoryToggleButton = () => {
  const category = useSelector((s: RootState) => s.category); // 'all' | 'coffee' | 'bakery'
  const dispatch = useDispatch();
  const isBakery = category === 'bakery';

  return (
    <motion.button
      onClick={() => dispatch(setCategory(isBakery ? 'all' : 'bakery'))}
      className={`group rounded-md px-4 py-2 text-sm font-medium transition cursor-pointer ${
        isBakery
          ? 'bg-red-600 text-white'
          : 'bg-stone-200 hover:bg-stone-300'
      }`}
      aria-pressed={isBakery}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
    >
      {isBakery ? 'Tüm ürünler' : 'Bakery🥐 '}
    </motion.button>
  );
};

export default CategoryToggleButton;