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
    return (
      <div>
        <BasketList test="123" />
      </div>
    );
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
