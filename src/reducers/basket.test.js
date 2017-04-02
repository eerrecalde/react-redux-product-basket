import basketReducer from './basket'
import * as actions from '../actions/basketActions'

test('should add a product when call ADD_TO_BASKET_SUCCESS', () => {
  const initialState = {
    basket: []
  }

  const newProduct = {"id": "01"};
  const quantity = 2;

  const action = actions.addToBasketSuccess(newProduct)

  // act
  const newState = basketReducer(initialState.basket, action)

  expect(!!newState.length).toBeTruthy();
})

test('should remove a product when call REMOVE_FROM_BASKET_SUCCESS', () => {
  const initialState = {
    basket: [
      {id: "01"}, {id: "02"}
    ]
  };

  const prodToRemove = "02";

  const action = actions.removeFromBasketSuccess(prodToRemove)

  // act
  const newState = basketReducer(initialState.basket, action)

  expect(newState.length).toBe(initialState.basket.length - 1);
})

test('should update a product when call UPDATE_BASKET_SUCCESS', () => {
  const initialState = {
    basket: [
      {id: "01", name: "test1"}, {id: "02", name: "test2"}
    ]
  };

  const prodToUpdate = {id: "02", name: "test3"};

  const action = actions.updateBasketSuccess(prodToUpdate)

  // act
  const newState = basketReducer(initialState.basket, action)

  const updatedCourse = newState.find(a => a.id === prodToUpdate.id)
  const untouchedCourse = newState.find(a => a.id === '01')

  // assert
  expect(updatedCourse.name).toEqual('test3')
  expect(untouchedCourse.name).toEqual('test1')
})
