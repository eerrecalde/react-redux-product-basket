import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as basketActions from '../../actions/basketActions'
import BasketItem from './BasketItem'

class BasketContainer extends Component {

  constructor(props){
    super(props)
    this.state = {quantity: 1, saving: false}
    this.addOneItem = this.addOneItem.bind(this)
    this.removeOneItem = this.removeOneItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({quantity: event.target.value})
  }

  addOneItem(item, quantity) {
    this.setState({saving: true})
    this.props.actions.updateBasket(item, quantity + 1)
      .then(() => {
        this.setState({saving: false})
      })
  }

  removeOneItem(item, quantity) {
    const newQuantity = quantity - 1;
    this.setState({saving: true})
    this.props.actions.updateBasket(item, newQuantity)
      .then(() => {
        if(newQuantity) this.setState({saving: false})
      })
  }

  render() {
    const {item} = this.props
    return (
      <div>
        <BasketItem item={item} onAddItem={this.addOneItem} onRemoveItem={this.removeOneItem} saving={this.state.saving} onChange={this.handleChange}/>
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

export default connect (mapStateToProps, mapDispatchToProps)(BasketContainer)
