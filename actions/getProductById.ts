// interface ParamsType {
//     id?: string
// }

// export default async function getProductById(params: ParamsType) {
//     try {
//         console.log("first---------", params.id)
//         const response = await fetch(`https://dummyjson.com/products/${params.id}`, {
//         cache: 'no-store',
//   });
//   console.log("first---------", response)

//   const product = await response.json();


//   if(!product){
//     return null;
//   }
//   return product;
//     } catch (error: any) {
//         throw new Error(error);
//     };
// };

// NOT WORKING ASDFKJNAJVKLNSDLJKFHWIOAEPFHJAWPI