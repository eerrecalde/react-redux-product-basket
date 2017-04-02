export default [
  {
    "id": "3x2",
    "description": "2 for the price of 1",
    "formula": (quantity, price) => {
      const rightToDiscount = parseInt(quantity / 3, 10) * 3;
      const withNoDiscount = quantity - rightToDiscount
      return (parseInt(quantity / 3, 10) * 2 * price) + withNoDiscount * price
    }
  },
  {
    "id": "5%off",
    "description": "5% discount on this product",
    "formula": (quantity, price) => quantity * (price * 0.95)
  },
  {
    "id": "10off>3",
    "description": "10 off discount on this product when buying more than 3",
    "formula": (quantity, price) => {
      if(quantity > 3) {
        return (quantity * price) - 10
      } else {
        return quantity * price
      }
    }
  }
]
