import { call, put } from 'redux-saga/effects';
import { Creators as PriceCreators } from '../ducks/prices';
import api from '~/services/api';

export function* getPrices(action) {
  try {
    const response = yield call(api.get, `app/getprices/${action.payload}`);
    yield put(PriceCreators.getPricesSuccess(response.data));
  } catch (err) {}
}
