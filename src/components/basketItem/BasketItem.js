import React, {PropTypes} from 'react'

const BasketItem = ({item, onAddItem, onRemoveItem, saving, onChange}) => (
  <li className="prod mdl-list__item mdl-list__item--custom mdl-list__item--two-line">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar mdl-list__item-avatar--custom">wallpaper</i>
      <span>{item.name} <span dangerouslySetInnerHTML={{__html: (item.discount) ? '<small title=" ' + item.discount.description + ' ">(' + item.discount.id + ')</small> ' : ' '}}></span>
        {item.price.currencyChar}{item.price.value}
      </span>
      <span className="mdl-list__item-sub-title">{item.description}</span>
    </span>
    <span className="mdl-list__item-secondary-content mdl-list__item-secondary-content--custom">
      <div className="clearfix">
        <button disabled={saving} onClick={() => onRemoveItem(item, item.quantity)} className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
          <i className="material-icons">remove</i>
        </button>
        <input className="prod__quantity" type="number" name="" readOnly value={item.quantity} onChange={onChange} id=""/>
        <button disabled={saving} onClick={() => onAddItem(item, item.quantity)} className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
          <i className="material-icons">add</i>
        </button>
      </div>
    </span>
  </li>
)

BasketItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default BasketItem
