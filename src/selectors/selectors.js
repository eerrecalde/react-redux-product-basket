export function addDiscountedPriceToProducts (products) {
  let discountedProducts = Object.assign([], products)
  discountedProducts.forEach((e) => {
    if(!e.discount) {
      e.discounted_price = e.price.value * e.quantity
    } else {
      e.discounted_price = e.discount.formula(e.quantity, e.price.value)
    }
  })

  return discountedProducts;
}

export function addDiscountsToProducts (products, discounts) {
  let tmpProducts = Object.assign([], products)
  tmpProducts.forEach((e) => {
    if(e.discount) {
      let currentDiscount = discounts.find((d) => {
        return d.id === e.discount
      })
      e.discount = currentDiscount;
    }
  })

  return tmpProducts;
}
