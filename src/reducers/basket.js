import initialState from './initialState'

const basket = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        action.id
      ];
    case 'REMOVE_PRODUCT':
      return [...state.filter((id) => id !== action.id)];
    default:
      return state
  }
}

export default basket
