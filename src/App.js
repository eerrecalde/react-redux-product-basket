import React from 'react'
import Header from './components/common/Header'
import ProductBasketContainer from './containers/ProductBasketContainer'
import ProductListContainer from './containers/ProductListContainer'
import './assets/material/material.min.js'
import './assets/material/material.min.css'

// TODO: Specially because I included material design lite, the bundled css file should be processed
// with purify in order to remove unused styles https://github.com/webpack-contrib/purifycss-webpack

const App = () => (
  <div>
    <Header />
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--6-col"><ProductListContainer /></div>
      <div className="mdl-cell mdl-cell--6-col"><ProductBasketContainer /></div>
    </div>
  </div>
)

export default App
