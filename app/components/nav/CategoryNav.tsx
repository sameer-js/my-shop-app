import Container from '../container/Container';
import Category from './Category';

function CategoryNav(data: any) {
  const categories = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
  ];
  return (
    <div className='bg-white '>
      <Container>
        <div className='px-2 flex flex-row items-center justify-between overflow-x-auto cursor-pointer'>
          {categories.map((catItem: any) => (
            <div key={catItem}>
              <Category label={catItem} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CategoryNav;
