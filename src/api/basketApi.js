import delay from './delay'
import {addDiscountedPriceToProducts} from '../selectors/selectors'

//  This file mocks a web API by working with the hard-coded data below.
//  It uses setTimeout to simulate the delay of an AJAX call.
//  All calls return promises.
const basket = {
  products: [],
  price: {
    total: 0,
    discounted: 0,
    subtotal: 0
  }
}

class BasketApi {
  static addToBasket (item, quantityToAdd) {
    return new Promise((resolve, reject) => {
      // Replace this code with the real API call
      setTimeout(() => {
        let itemToAdd = Object.assign({}, item)
        const existingItemIndex = basket.products.findIndex(a => a.id === itemToAdd.id)
        const existingItem = basket.products[existingItemIndex]

        quantityToAdd = parseInt(quantityToAdd)

        if (existingItem) {
          itemToAdd.quantity = existingItem.quantity || 0
          itemToAdd.quantity += quantityToAdd
          basket.products.splice(existingItemIndex, 1, itemToAdd)
        } else {
          itemToAdd.quantity = itemToAdd.quantity || 0
          itemToAdd.quantity += quantityToAdd
          basket.products.push(itemToAdd)
        }

        basket.products = addDiscountedPriceToProducts(basket.products)

        resolve({item: itemToAdd, method: (existingItem) ? 'update' : 'add'})
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

  static updateBasket (item, newQuantity) {
    return new Promise((resolve, reject) => {
      // Replace this code with the real API call
      setTimeout(() => {
        let itemToUpdate = Object.assign({}, item)
        const existingItemIndex = basket.products.findIndex(a => a.id === itemToUpdate.id)
        const existingItem = basket.products[existingItemIndex]
        newQuantity = parseInt(newQuantity)

        if (existingItem) {
          if(newQuantity > 0) {
            itemToUpdate.quantity = newQuantity
            basket.products.splice(existingItemIndex, 1, itemToUpdate)
          } else {
            basket.products.splice(existingItemIndex, 1)
          }

          basket.products = addDiscountedPriceToProducts(basket.products)

          resolve({item: itemToUpdate, newQuantity})
        } else {
          reject('Item to update not found');
        }

      }, delay)
    })
  }
}

export default BasketApi
