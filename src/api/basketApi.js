import delay from './delay';

//  This file mocks a web API by working with the hard-coded data below.
//  It uses setTimeout to simulate the delay of an AJAX call.
//  All calls return promises.
const basket = [];

class BasketApi {
  static addToBasket (item) {
    item = Object.assign({}, item)
    return new Promise((resolve, reject) => {
      // Replace this code with the real API call
      setTimeout(() => {
        const existingItem = basket.find(a => a.id === item.id)
        item.quantity = parseInt(item.quantity)
        if (existingItem) {
          item.quantity += existingItem.quantity
          basket.splice(existingItem, 1, item)
        } else {
          basket.push(item)
        }

        console.log('ITEM ADDED', item)

        resolve(basket)
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

export default BasketApi
