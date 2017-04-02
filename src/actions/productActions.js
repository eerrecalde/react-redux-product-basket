import productsApi from '../api/productsApi';

export const loadProductsSuccess = (products) => {
  return {
    type: 'LOAD_PRODUCTS_SUCCESS',
    products
  }
}

export const loadProducts = () => {
  return (dispatch) => {
    return productsApi.getAllProducts().then((products) => {
      dispatch(loadProductsSuccess(products))
    }).catch((error) => {
      throw (error)
    })
  }
}
