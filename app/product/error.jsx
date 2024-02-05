'use client';

import Link from 'next/link';

function error({ error, reset }) {
  return (
    <div className='flex flex-col mx-auto my-48 gap-10 justify-center items-center'>
      <h2 className=' font-bold text-3xl'>Something went wrong!</h2>
      <h2 className=' font-bold text-md'>This page might not exits</h2>
      <Link
        href={'/'}
        className='max-w-64 text-center rounded-lg text-yellow-200 bg-gradient-to-r from-fuchsia-500 to-pink-400 border-b uppercase text-lg leading-normal py-2 px-3'
      >
        Return to Home Page
      </Link>
    </div>
  );
}

export default error;
