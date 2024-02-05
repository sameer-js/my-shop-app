'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cutText } from '@/utils/cutText';
import { FaCartPlus, FaStar } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className='flex flex-col items-center text-center w-full gap-1 col-span-1 cursor-pointer sm:p-2 overflow-hidden rounded-lg transition hover:scale-105 border border-gray-100 bg-white shadow-md'
    >
      <div className='relative w-full aspect-square wrap'>
        <Image
          src={data.thumbnail}
          className='w-full h-full object-contain'
          fill
          alt={data.title}
        />
        <span className='absolute top-0 right-0 m-2 rounded-lg bg-gray-800 px-2 text-center text-sm font-medium text-white'>
          {Math.ceil(data.discountPercentage)}% OFF
        </span>
      </div>
      <div className='sm:mt-4 sm:px-4 sm:pb-4 w-full'>
        <h5 className='text-xl text-slate-900 overflow-hidden whitespace-nowrap'>
          {cutText(data.title)}
        </h5>
        <div className='mt-2 mb-5 flex items-center gap-4 justify-evenly sm:justify-between '>
          <div>
            <p>
              <span className='text-2xl font-bold text-slate-900'>
                $
                {Math.ceil(
                  data.price - (data.price * data.discountPercentage) / 100
                )}
              </span>
              <span className='text-sm text-slate-700 line-through hidden sm:inline'>
                ${data.price}
              </span>
            </p>
          </div>
          <div className='flex items-center'>
            <FaStar color='gold' />
            <span className='mr-2 ml-1 rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold'>
              {data.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <Link
          href={`/product/${data.id}`}
          className='flex sm:gap-4 items-center justify-evenly sm:rounded-md bg-slate-900 sm:px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-blue-300'
        >
          <FaCartPlus size={18} />
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
