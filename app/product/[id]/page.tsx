import Container from '@/app/components/container/Container';
import ProductDetails from '@/app/components/product/ProductDetails';

interface ParamsType {
  id?: string;
}

async function ProductPage({ params }: { params: ParamsType }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`, {
    cache: 'no-store',
  });
  const data = await response.json();

  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={data} />
      </Container>
    </div>
  );
}

// Instead of fetching data here, use action function getProductById

export default ProductPage;
