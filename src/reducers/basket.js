import initialState from './initialState'

const basket = (state = initialState.basket, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.item)
      ]

    case 'UPDATE_BASKET_SUCCESS':
      return [
        ...state.filter((item) => item.id !== action.item.id),
        Object.assign({}, action.item)
      ]

    case 'REMOVE_FROM_BASKET_SUCCESS':
      return [...state.filter((item) => item.id !== action.id)]

    default:
      return state
  }
}

export default basket
