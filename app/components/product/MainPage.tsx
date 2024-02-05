'use client';

import { useState } from 'react';
import ProductCard from '../card/ProductCard';

const MainPage: React.FC<any> = (data) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);
  const arrayOfItems = data.data;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = arrayOfItems.slice(firstItemIndex, lastItemIndex);

  let pages = [];
  for (
    let i = 1;
    i <= Math.ceil(arrayOfItems.length / itemsPerPage);
    i = i + 1
  ) {
    pages.push(i);
  }
  return (
    <div>
      {/* Pagination */}
      <div className='text-slate-700 gap-4 flex items-center justify-end sm:justify-between text-xl font-medium mb-6'>
        <div className='hidden sm:block'>
          Showing {firstItemIndex + 1} - {arrayOfItems.length} items{' '}
        </div>
        <div>
          <span className='px-4'>Page:</span>
          {pages.map((page, index) => {
            return (
              <button
                className='border-[1.2px] border-slate-300 px-2 rounded hover:bg-gray-200 disabled:bg-gray-200'
                key={index}
                onClick={() => setCurrentPage(page)}
                disabled={page == currentPage}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {currentItems && currentItems.length ? (
          currentItems.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })
        ) : (
          <div>No Items to show</div>
        )}
      </div>
    </div>
  );
};
export default MainPage;
