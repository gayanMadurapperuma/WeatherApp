import {takeLatest} from 'redux-saga/effects';
import * as types from '../../../constants/actionTypes';
import {searchCityAsync, getCitiesAsync, addFavoriteAsync} from './weatherSaga';

export const weatherSaga = [
  takeLatest(types.SEARCH_CITY_REQUEST, searchCityAsync),
  takeLatest(types.SAVED_CITY_REQUEST, getCitiesAsync),
  takeLatest(types.ADD_FAVORITE_REQUEST, addFavoriteAsync),
];
