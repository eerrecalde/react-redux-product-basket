import React from 'react'
import {shallow} from 'enzyme'
import ProductItem from './ProductItem'

function setup (saving) {
  let props = {
    item: {
      id: '01',
      name: 'Product 1',
      description: 'Lorem ipsum dolor amet.',
      price: {
        currency: 'GBP',
        currencyChar: '£',
        value: 12
      },
      discount: {
        id: '3x2',
        description: '2 for the price of 1'
      }
    },
    saving: saving,
    qty: 1,
    disabled: false,
    onAddItem: () => {},
    onChange: () => {}
  }

  return shallow(<ProductItem {...props} />)
}

it('ProductItem renders and have a value assigned to the input', () => {
  const wrapper = setup(false)

  // console.log('wrapper', wrapper) 

  expect(wrapper.find('.prod').length).toEqual(1)

  expect(wrapper.find('.prod__quantity').prop('value')).toBe(1)
})

it('ProductItem reneders its price', () => {
  const wrapper = setup(false)

  expect(wrapper.find('.prod__price').text()).toBe("£12")
})
