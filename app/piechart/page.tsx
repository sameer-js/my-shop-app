'use client';

import { products } from '../../utils/data';
import { categories } from '../../utils/category';
import { Chart } from 'react-google-charts';

// const count = products.filter((obj) => obj.category === category).length;

let countArray = [];

for (let i = 0; i < categories.length; i = i + 1) {
  countArray[i] = products.reduce(
    (count, item) => (item.category === categories[i] ? count + 1 : count),
    0
  );
  console.log(countArray[i], categories[i]);
}

// categories.map(function (v, i) {
//   return {
//     index: v,
//     value: countArray[i],
//   };
// });
const data = [
  ['Category', 'Count'],
  ['smartphones', 5],
  ['laptops', 5],
  ['fragrances', 5],
  ['skincare', 5],
  ['groceries', 5],
  ['home-decoration', 5],
  ['furniture', 0],
  ['tops', 0],
  ['womens-dresses', 0],
  ['womens-shoes', 0],
  ['mens-shirts', 0],
  ['mens-shoes', 0],
  ['mens-watches', 0],
  ['womens-watches', 0],
  ['womens-bags', 0],
  ['womens-jewellery', 0],
  ['sunglasses', 0],
  ['automotive', 0],
  ['motorcycle', 0],
  ['lighting', 0],
];
const options = {
  title: 'Categories of Products',
};

export default function Piechart() {
  return (
    <Chart
      chartType='PieChart'
      data={data}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  );
}
