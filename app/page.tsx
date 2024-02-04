import { products } from '@/utils/products';
import Container from './components/container/Container';
import HeroBanner from './components/hero/HeroBanner';
import { cutText } from '@/utils/cutText';
import ProductCard from './components/card/ProductCard';

export default function Home() {
  return (
    <div className='p-8'>
      <Container>
        <HeroBanner />
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
