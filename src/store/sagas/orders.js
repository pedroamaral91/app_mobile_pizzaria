import { call, put } from 'redux-saga/effects';
import { Creators as OrdersCreators } from '../ducks/orders';
import api from '~/services/api';

export function* getOrders() {
  try {
    const response = yield call(api.get, 'app/getorders');
    yield put(OrdersCreators.getRequestSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
  }
}
