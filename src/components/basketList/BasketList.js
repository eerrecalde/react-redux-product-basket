import React, {PropTypes} from 'react'
import BasketContainer from '../basketItem/BasketContainer'

const BasketList = ({basket}) => {
  return (
    <ul className="mdl-list">
      {basket.map(
        (item) => <BasketContainer key={item.id} item={item} />
      )}
    </ul>
  )
}

BasketList.propTypes = {
  basket: PropTypes.array.isRequired
}

export default BasketList
