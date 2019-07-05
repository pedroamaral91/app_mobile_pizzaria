import { combineReducers } from 'redux';

import products from './products';
import productTypes from './productTypes';
import prices from './prices';

export default combineReducers({
  products,
  productTypes,
  prices,
});
