import productsApi from '../api/productsApi';
import basketApi from '../api/basketApi';

export const addToBasketSuccess = (basket) => {
  return {
    type: 'ADD_TO_BASKET_SUCCESS',
    basket
  }
}

export const addToBasket = (item) => {
  console.log('Adding item', item)
  return (dispatch) => {
    return basketApi.addToBasket(item).then((basket) => {
      dispatch(addToBasketSuccess(basket))
    }).catch((error) => {
      throw (error)
    })
  }
}

export const removeFromBasket = (id) => {
  return {
    type: 'REMOVE_PRODUCT',
    id
  }
}

export const loadProductsSuccess = (products) => {
  return {
    type: 'LOAD_PRODUCTS_SUCCESS',
    products
  }
}

export const loadProducts = () => {
  return (dispatch) => {
    return productsApi.getAllProducts().then((products) => {
      console.log('SUCCESS', products)
      dispatch(loadProductsSuccess(products))
    }).catch((error) => {
      throw (error)
    })
  }
}
