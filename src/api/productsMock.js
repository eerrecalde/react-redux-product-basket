export default [
  {
    "id": "01",
    "name": "Product 1",
    "description": "Lorem ipsum dolor amet.",
    "price": {
      "currency": "GBP",
      "currencyChar": "£",
      "value": 12
    },
    "discount": {
      "type": "percentage",
      "percentage": 5
    }
  },
  {
    "id": "02",
    "name": "Product 2",
    "description": "Lorem ipsum dolor amet.",
    "price": {
      "currency": "GBP",
      "currencyChar": "£",
      "value": 15
    },
    "discount": {
      "type": "fixed",
      "min_quantity": 2,
      "fixed_discount": 3
    }
  }
]
