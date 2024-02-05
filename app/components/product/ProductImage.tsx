import Image from 'next/image';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const ProductImage: React.FC<any> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const objectLength = Object.keys(slides).length;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? objectLength - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === objectLength - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='h-full w-full m-auto py-16 px-4 relative group hover:scale-105 rounded-lg'>
      <Image
        className='w-full h-full object-contain rounded-lg'
        fill
        src={slides[currentIndex]}
        alt={slides[currentIndex]}
      />
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={24} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={24} />
      </div>
    </div>
  );
};

export default ProductImage;
