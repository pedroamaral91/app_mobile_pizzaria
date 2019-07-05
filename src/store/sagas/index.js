import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProductsTypes } from '../ducks/products';
import { getProducts } from './products';

import { Types as ProductTypes } from '../ducks/productTypes';
import { getProductTypes } from './productTypes';

import { Types as PriceTypes } from '../ducks/prices';
import { getPrices } from './prices';

export default function* rootSaga() {
  return yield all([
    takeLatest(ProductsTypes.GET_REQUEST, getProducts),
    takeLatest(ProductTypes.GET_REQUEST, getProductTypes),
    takeLatest(PriceTypes.GET_REQUEST, getPrices),
  ]);
}
