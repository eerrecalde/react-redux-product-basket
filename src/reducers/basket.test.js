import basketReducer from './basket'
import * as actions from '../actions'

test('should add a product when call ADD_PRODUCT', () => {
  const initialState = {
    cart: []
  }

  const newProduct = "01";

  const action = actions.addToBasket(newProduct)

  // act
  const newState = basketReducer(initialState.cart, action)

  expect(!!newState.length).toBeTruthy();
})

test('should remove a product when call REMOVE_PRODUCT', () => {
  const initialState = {
    cart: ["01", "02"]
  };

  const prodToRemove = "01";

  const action = actions.removeFromBasket(prodToRemove)

  // act
  const newState = basketReducer(initialState.cart, action)

  expect(newState.length).toBe(initialState.cart.length - 1);
})
