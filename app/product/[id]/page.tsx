import Container from '@/app/components/container/Container';
import ProductDetails from '@/app/components/product/ProductDetails';
import { product } from '@/utils/product';

interface ParamsType {
  id?: string;
}

const ProductPage = ({ params }: { params: ParamsType }) => {
  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default ProductPage;
