import delay from './delay';
import mockProducts from './productsMock';

//  This file mocks a web API by working with the hard-coded data below.
//  It uses setTimeout to simulate the delay of an AJAX call.
//  All calls return promises.
console.log(mockProducts);
const products = mockProducts;

class ProductApi {
  static getAllProducts () {
    return new Promise((resolve, reject) => {
      // Replace this code with the real API call
      setTimeout(() => {
        resolve(Object.assign([], products))
      }, delay)

      // Real API call scenario using axios
      // const url = 'apiUrl';
      // axios.get(url)
      // .then((response) => {
      //   resolve(Object.assign([], products));
      // })
      // .catch(function (error) {
      //   reject(error);
      // });

    })
  }
}

export default ProductApi
