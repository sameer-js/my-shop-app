import Container from '@/app/components/container/Container';
import MainPage from '@/app/components/product/MainPage';
import { products } from '@/utils/data';

interface ParamsType {
  id?: string;
}
async function CategoryPage({ params }: { params: ParamsType }) {
  const filteredProducts = products.filter(
    (product: any) => product.category == params.id
  );
  // console.log(params);
  return (
    <div className='p-8'>
      <Container>
        <MainPage data={filteredProducts} />
      </Container>
    </div>
  );
}

// Instead of fetching data here, use action function getProductById

export default CategoryPage;
