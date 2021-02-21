import {put, call} from 'redux-saga/effects';
import * as weatherActions from '../../../actions/weather';
import {
  searchCity,
  getCities,
  addFavorite,
} from '../../../actions/services/weather';

export function* searchCityAsync(payload) {
  try {
    const {query} = payload;
    yield put(weatherActions.searchCityProcessing());
    const {data} = yield call(searchCity, query);
    yield put(weatherActions.searchCitySuccess(data));
  } catch (error) {
    yield put(weatherActions.searchCityFailed());
  }
}

export function* getCitiesAsync() {
  try {
    const {data} = yield call(getCities);
    yield put(weatherActions.getSavedCitiesSuccess(data));
  } catch (error) {
    yield put(weatherActions.getSavedCitiesFailed());
  }
}

export function* addFavoriteAsync(payload) {
  try {
    const {info} = payload;
    yield call(addFavorite, info);
    yield call(getCitiesAsync);
    yield put(weatherActions.addFavoriteSuccess());
  } catch (error) {
    yield put(weatherActions.addFavoriteFailed());
  }
}
