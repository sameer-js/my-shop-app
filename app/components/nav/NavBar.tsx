'use client';

import Link from 'next/link';
import Container from '../container/Container';
import { Libre_Barcode_39_Text } from 'next/font/google';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import CategoryNav from './CategoryNav';
import SearchBar from '../search/SearchBar';
import { BsFillPieChartFill } from 'react-icons/bs';

const libre = Libre_Barcode_39_Text({ subsets: ['latin'], weight: ['400'] });

function NavBar() {
  const win = window.sessionStorage;

  const router = useRouter();
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
              <div className='hidden md:block'>
                <SearchBar />
              </div>
              <div className=' cursor-not-allowed'>
                <FaShoppingCart size={28} />
              </div>
              <div
                onClick={() => router.push('/piechart')}
                className='hidden md:block items-center gap-2 text-lg cursor-pointer'
              >
                <BsFillPieChartFill size={28} />
              </div>
              <div className='hidden md:block'>
                {win.getItem('user') == null ? (
                  <Link
                    href={'/login'}
                    className='flex sm:gap-4 items-center justify-evenly sm:rounded-md bg-slate-900 sm:px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700'
                  >
                    Login
                  </Link>
                ) : (
                  <div
                    onClick={() => router.push('/login')}
                    className='flex items-center gap-2 text-lg cursor-pointer'
                  >
                    <FaUserCircle size={26} />
                    {win.getItem('user')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <CategoryNav />
    </div>
  );
}

export default NavBar;
