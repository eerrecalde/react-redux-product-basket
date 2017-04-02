import { combineReducers } from 'redux'
import basket from './basket'
import products from './products'

const rootReducer = combineReducers({
  basket,
  products
})

export default rootReducer
