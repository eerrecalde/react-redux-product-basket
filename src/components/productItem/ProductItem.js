import React, {PropTypes} from 'react'
import './ProductItem.css'

const ProductItem = ({item, onAddItem, qty, saving, onChange}) => (
  <li className="prod mdl-list__item mdl-list__item--custom mdl-list__item--two-line">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar mdl-list__item-avatar--custom">wallpaper</i>
      <span>{item.name} <span dangerouslySetInnerHTML={{__html: (item.discount) ? '<small title=" ' + item.discount.description + ' ">(' + item.discount.id + ')</small> ' : ' '}}></span>
        <span className="prod__price">{item.price.currencyChar}{item.price.value}</span>
      </span>
      <span className="mdl-list__item-sub-title">{item.description}</span>
    </span>
    <span className="mdl-list__item-secondary-content mdl-list__item-secondary-content--custom">
      <div className="clearfix">
        <input className="prod__quantity" type="number" name="" value={qty} onChange={onChange} id=""/>
        <button disabled={saving} onClick={() => onAddItem(item, qty)} className="prod__button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
          <i className="material-icons">add</i>
        </button>
      </div>
    </span>
  </li>
)

ProductItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ProductItem
