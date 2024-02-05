import Container from './components/container/Container';
import HeroBanner from './components/hero/HeroBanner';
import MainPage from './components/product/MainPage';

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products', {
    cache: 'no-store',
  });
  const data = await response.json();
  const products = data.products;

  return (
    <div className='p-8'>
      <Container>
        <HeroBanner />
        <MainPage data={products} />
      </Container>
    </div>
  );
}
