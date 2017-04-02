import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as basketActions from '../../actions/basketActions'
import ProductList from './ProductList'

class ProductListContainer extends Component {

  constructor(props){
    super(props);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.products.length) {
      // Neccessary to populate form when existing course is loaded directly.
      this.setState({products: Object.assign([], nextProps.products)})
    }
  }

  render() {
    const {products} = this.props
    console.log('PRODS', products)
    return (
      <div>
        <h5>Product List</h5>
        <ProductList products={products} />
      </div>
    );
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

export default connect (mapStateToProps, mapDispatchToProps)(ProductListContainer);
