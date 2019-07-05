import { call, put } from 'redux-saga/effects';
import { Creators as ProductTypesCreators } from '../ducks/productTypes';
import api from '~/services/api';

export function* getProductTypes(action) {
  try {
    const response = yield call(api.get, `app/gettypes/${action.payload}`);
    yield put(ProductTypesCreators.getTypesSuccess(response.data));
  } catch (err) {}
}
