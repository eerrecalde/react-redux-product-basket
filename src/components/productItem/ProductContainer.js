import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as basketActions from '../../actions/basketActions'
import ProductItem from './ProductItem'

class ProductContainer extends Component {

  constructor(props){
    super(props)
    this.state = {quantity: 1}
    this.addItem = this.addItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.products.length) {
      // Neccessary to populate form when existing course is loaded directly.
      this.setState({products: Object.assign([], nextProps.products)})
    }
  }

  handleChange(event) {
    this.setState({quantity: event.target.value})
  }

  addItem(item, quantityToAdd) {
    this.setState({saving: true})
    this.props.actions.addToBasket(item, quantityToAdd)
      .then(() => {
        this.setState({saving: false})
      })
  }

  render() {
    const {item} = this.props
    return (
      <div>
        <ProductItem item={item} onAddItem={this.addItem} qty={this.state.quantity} saving={this.state.saving} disabled={this.state.saving} onChange={this.handleChange}/>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    item: ownProps.item
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(basketActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ProductContainer)
