import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as basketActions from '../../actions'
import BasketList from './BasketList';

class BasketListContainer extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const {basket} = this.props
    if(basket.length) {
      return (
        <div>
          <h5>Basket</h5>
          <BasketList basket={basket} />
          <p>Total products: {
            basket.reduce(function(acc, val) {
              return acc + val.quantity;
            }, 0)
          }</p>
          <p>Sub total: {
            basket.reduce(function(acc, val) {
              return acc + (val.quantity * val.price.value);
            }, 0)
          }</p>
          <p>Total Discounts: {
            basket.reduce(function(acc, val) {
              return acc + (val.quantity * val.price.value);
            }, 0) - basket.reduce(function(acc, val) {
              return acc + val.discounted_price;
            }, 0)
          }</p>
          <p>Total: {
            basket.reduce(function(acc, val) {
              return acc + val.discounted_price;
            }, 0)
          }</p>
        </div>
      )
    } else {
      return (
        <div>
          <h5>Basket</h5>
          <p>You have 0 products in the basket</p>
        </div>
      )
    }
  }
}

function mapStateToProps (state, ownProps) {
  return {
    basket: state.basket
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(basketActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(BasketListContainer);
