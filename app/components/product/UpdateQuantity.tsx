'use client';

import { CartProductType } from './ProductDetails';

// cartCounter to see if in product details page or not to display "Quantity" text

interface UpdateQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleInc: () => void;
  handleDec: () => void;
}

const buttonStyles =
  'border-[1.2px] border-slate-300 px-2 rounded hover:bg-gray-200';

const UpdateQuantity: React.FC<UpdateQuantityProps> = ({
  cartCounter,
  cartProduct,
  handleInc,
  handleDec,
}) => {
  return (
    <div className='flex gap-8 items-center'>
      {cartCounter ? null : <div className='font-semibold'>Quantity:</div>}
      <div className='flex gap-4 items-center text-base'>
        <button className={buttonStyles} onClick={handleDec}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={buttonStyles} onClick={handleInc}>
          +
        </button>
      </div>
    </div>
  );
};

export default UpdateQuantity;
