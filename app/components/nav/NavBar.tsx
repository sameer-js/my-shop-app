import Link from 'next/link';
import Container from '../container/Container';
import { Libre_Barcode_39_Text } from 'next/font/google';

const libre = Libre_Barcode_39_Text({ subsets: ['latin'], weight: ['400'] });

function NavBar() {
  return (
    <div className='sticky top-0 w-full bg-gray-50 shadow-sm z-50'>
      <div className='py-5 border-b-2'>
        <Container>
          <div className='flex justify-between items-center gap-3 md:gap-0'>
            <Link
              href='/'
              className={`${libre.className} md:text-5xl text-4xl`}
            >
              My Shop
            </Link>
            <div className='flex items-center gap-8 md:gap-12'>
              <div className='hidden md:block'>Search</div>
              <div>Cart</div>
              <div className='hidden md:block'>User</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NavBar;
