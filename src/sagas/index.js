import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchProducts() {

  const json = yield fetch('https://run.mocky.io/v3/8bbfe1e9-fc3b-48b8-bd0e-50983aca71c4')
    .then(response => response.json());

  yield put({ type: "FETCH_PRODUCTS_SUCCESS", json: json.data || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('FETCH_PRODUCTS_PENDING', fetchProducts)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}