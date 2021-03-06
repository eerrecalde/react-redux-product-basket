import basketApi from '../api/basketApi';

export const addToBasketSuccess = (item) => {
  return {
    type: 'ADD_TO_BASKET_SUCCESS',
    item
  }
}

export const updateBasketSuccess = (item) => {
  return {
    type: 'UPDATE_BASKET_SUCCESS',
    item
  }
}

export const removeFromBasketSuccess = (id) => {
  return {
    type: 'REMOVE_FROM_BASKET_SUCCESS',
    id
  }
}

export const addToBasket = (item, quantityToAdd) => {
  return (dispatch) => {
    return basketApi.addToBasket(item, quantityToAdd).then(({item, method}) => {
      if(method === 'add') dispatch(addToBasketSuccess(item))
      if(method === 'update') dispatch(updateBasketSuccess(item))
    }).catch((error) => {
      throw (error)
    })
  }
}

export const updateBasket = (item, newQuantity) => {
  return (dispatch) => {
    return basketApi.updateBasket(item, newQuantity).then(({item, newQuantity}) => {
      if(newQuantity > 0) dispatch(updateBasketSuccess(item))
      if(newQuantity === 0) dispatch(removeFromBasketSuccess(item.id))
    }).catch((error) => {
      throw (error)
    })
  }
}
