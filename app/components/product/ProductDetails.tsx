'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { FaCartPlus, FaStar } from 'react-icons/fa6';
import UpdateQuantity from './UpdateQuantity';

interface ProductDetailsProps {
  product: any;
}

export type ImageType = {
  image: string;
};

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  image: ImageType;
  quantity: number;
  price: number;
};
// image: string[];

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    image: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const handleInc = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, []);

  const handleDec = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      <div className=''>Image</div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-medium text-slate-800'>{product.name}</h2>
        <div className='flex gap-5'>
          <div>{product.category} </div>|{' '}
          <div>
            {product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}
          </div>
          | <div className='text-green-500'>In-stock</div>
        </div>
        <div className='flex gap-10 '>
          <div className='text-2xl font-bold text-slate-900'>
            $ {product.price}
          </div>
          <div className='flex gap-2 items-center'>
            <FaStar color='gold' />
            <span className='mr-2 ml-1 rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold'>
              {(Math.round(Math.random() * 100) / 10).toFixed(1)}
            </span>
          </div>
        </div>
        <div>
          <p className='text-lg font-medium mb-1'>Description</p>
          <p className='text-justify leading-relaxed '>{product.description}</p>
        </div>
        <div>
          <UpdateQuantity
            cartProduct={cartProduct}
            handleDec={handleDec}
            handleInc={handleInc}
          />
        </div>
        <Link
          href='#'
          className='flex items-center justify-center rounded-md bg-slate-900 sm:px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-blue-300'
        >
          <FaCartPlus size={18} />
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
