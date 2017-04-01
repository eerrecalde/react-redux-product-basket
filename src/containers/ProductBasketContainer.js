import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductBasket from '../components/ProductBasket';

class ProductBasketContainer extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ProductBasket test="123" />
      </div>
    );
  }
}

function mapStateToProps(){
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(ProductBasketContainer);
