import React, {PropTypes} from 'react'
import ProductContainer from '../productItem/ProductContainer'

const ProductList = ({products}) => {
  return (
    <ul className="mdl-list">
      {products.map(
        (item) => <ProductContainer key={item.id} item={item} />
      )}
    </ul>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList
