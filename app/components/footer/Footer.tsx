import { Libre_Barcode_39_Text } from 'next/font/google';
import Link from 'next/link';
import Container from '../container/Container';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

const libre = Libre_Barcode_39_Text({ subsets: ['latin'], weight: ['400'] });

function Footer() {
  return (
    <footer className='bg-black text-white mt-8 py-8'>
      <Container>
        <div className='flex justify-between items-center gap-3'>
          <Link href='/' className={`${libre.className}  md:text-4xl text-3xl`}>
            My Shop
          </Link>
          <div className='text-lg hidden md:block'>
            &copy; {new Date().getFullYear()} My Shop. All Rights Reserved
          </div>
          <div className='flex gap-10'>
            <Link href='#'>
              <AiFillFacebook size={28} />
            </Link>
            <Link href='#'>
              <AiOutlineInstagram size={28} />
            </Link>
            <Link href='#'>
              <AiOutlineTwitter size={28} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
