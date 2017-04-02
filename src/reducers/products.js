import initialState from './initialState'

const products = (state = initialState.products, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      console.log('LOAD PROD')
      return state.concat(action.products)
    default:
      return state
  }
}

export default products
