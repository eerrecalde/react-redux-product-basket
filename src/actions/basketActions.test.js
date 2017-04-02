import * as basketActions from './basketActions'

it('should create an ADD_TO_BASKET_SUCCESS action', () => {
  // arrange
  const item = {id: '02', name: 'TEST 2'}
  const expectedAction = {
    type: 'ADD_TO_BASKET_SUCCESS',
    item: item
  }

  // action
  const action = basketActions.addToBasketSuccess(item)

  // assert
  expect(action).toEqual(expectedAction)
})
