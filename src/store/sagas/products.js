import { put, call } from 'redux-saga/effects';
import api from '~/services/api';
import { Creators as ProductsCreators } from '../ducks/products';

export function* getProducts() {
  try {
    const response = yield call(api.get, 'app/getproducts');
    yield put(ProductsCreators.getProductsSuccess(response.data));
  } catch (err) {}
}
