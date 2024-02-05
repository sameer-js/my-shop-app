'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/`);
  };
  // Need to implement search
  //
  // async function Search({ params }: { params: ParamsType }) {
  //   const response = await fetch(
  //     `https://dummyjson.com/products/search?q=${params.id}`,
  //     {
  //       cache: 'no-store',
  //     }
  //   );
  //   const product = await response.json();
  //   console.log(product);
  return (
    <div className='relative'>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete='off'
          type='text'
          placeholder='Browse My Shop'
          className='w-full p-4 rounded-full bg-transparent border-2 cursor-not-allowed'
        />
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full cursor-not-allowed'>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
