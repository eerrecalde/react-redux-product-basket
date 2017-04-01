let nextTodoId = 0
export const addToBasket = (id) => {
  return {
    type: 'ADD_PRODUCT',
    id
  }
}

export const removeFromBasket = (id) => {
  return {
    type: 'REMOVE_PRODUCT',
    id
  }
}
