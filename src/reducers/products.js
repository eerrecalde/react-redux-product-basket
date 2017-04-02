import initialState from './initialState'

const products = (state = initialState.products, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return state.concat(action.products)
    default:
      return state
  }
}

export default products
