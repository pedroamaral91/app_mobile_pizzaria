import { combineReducers } from 'redux';

import products from './products';
import productTypes from './productTypes';
import prices from './prices';
import cart from './cart';
import orders from './orders';

export default combineReducers({
  products,
  productTypes,
  prices,
  cart,
  orders,
});
