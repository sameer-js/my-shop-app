'use client';

import { useCallback, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import UpdateQuantity from './UpdateQuantity';
import Button from '../button/Button';
import ProductImage from './ProductImage';

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  images: string[];
  quantity: number;
  price: number;
  rating: number;
  stock: number;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    title: product.title,
    description: product.description,
    category: product.category,
    brand: product.brand,
    images: { ...product.images },
    quantity: 1,
    price: product.price,
    rating: product.rating,
    stock: product.stock,
  });

  const handleInc = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, []);

  const handleDec = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-8'>
      <ProductImage slides={cartProduct.images} />
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-medium text-slate-800'>{product.title}</h2>
        <div className='flex gap-5 items-center'>
          <div>
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}{' '}
          </div>
          | <div>{product.brand}</div>{' '}
          <div className='text-green-500 text-sm hidden sm:block'>
            In-stock ({product.stock})
          </div>
        </div>
        <div className='flex gap-10 '>
          <div className='text-2xl font-bold text-slate-900'>
            $
            {Math.ceil(
              product.price - (product.price * product.discountPercentage) / 100
            )}
            <span className='pl-2 text-sm text-slate-700 line-through hidden sm:inline'>
              ${product.price}
            </span>
          </div>
          <div className='flex gap-2 items-center'>
            <FaStar color='gold' />
            <span className='mr-2 ml-1 rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold'>
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <div>
          <p className='text-lg font-medium mb-1'>Description</p>
          <p className='text-justify leading-relaxed '>{product.description}</p>
        </div>
        <div className='mt-4'>
          <UpdateQuantity
            cartProduct={cartProduct}
            handleDec={handleDec}
            handleInc={handleInc}
          />
        </div>
        <div className='max-w-80'>
          <Button label='Add to cart' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
