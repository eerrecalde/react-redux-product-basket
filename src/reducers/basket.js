import initialState from './initialState'

const basket = (state = initialState.basket, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET_SUCCESS':
      return Object.assign([], action.basket)
    case 'REMOVE_PRODUCT':
      return [...state.filter((id) => id !== action.id)]
    default:
      return state
  }
}

export default basket
