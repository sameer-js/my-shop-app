import Image from 'next/image';

function HeroBanner() {
  return (
    <div className='relative mb-8 mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly rounded-2xl bg-gradient-to-r from-fuchsia-700 to-pink-600'>
      <div className='text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
          Winter Sale!
        </h1>
        <p className='text-lg md:text-xl text-white mb-2'>
          Enjoy discounts on selected items
        </p>
        <p className='text-2xl md:text-5xl text-yellow-400 font-bold'>
          UPTO 50% OFF
        </p>
      </div>
      <div className='w-1/3 relative aspect-video hidden md:block'>
        <Image
          fill
          src='/assets/heroImg.png'
          alt='Hero Banner Image'
          className='object-contain drop-shadow-2xl'
        />
      </div>
    </div>
  );
}

export default HeroBanner;
