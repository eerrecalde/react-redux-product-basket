import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import initialState from './reducers/initialState'
import {loadProducts} from './actions/productActions'
import App from './App'

const store = createStore(initialState)
store.dispatch(loadProducts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
