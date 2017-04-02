import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as basketActions from '../../actions/basketActions'
import ProductList from './ProductList'

class ProductListContainer extends Component {
  render() {
    const {products} = this.props
    return (
      <div>
        <h5>Product List</h5>
        <ProductList products={products} />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    products: state.products
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(basketActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ProductListContainer)
