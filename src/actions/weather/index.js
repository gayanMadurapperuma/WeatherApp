import * as types from '../../constants/actionTypes';

export function searchCityRequest(query) {
  return {
    type: types.SEARCH_CITY_REQUEST,
    query,
  };
}

export function searchCitySuccess(data) {
  return {
    type: types.SEARCH_CITY_SUCCESS,
    data,
  };
}

export function searchCityFailed() {
  return {
    type: types.SEARCH_CITY_FAILED,
  };
}

export function addFavoriteRequest(info) {
  return {
    type: types.ADD_FAVORITE_REQUEST,
    info,
  };
}

export function addFavoriteSuccess(data) {
  return {
    type: types.ADD_FAVORITE_SUCCESS,
    data,
  };
}

export function addFavoriteFailed() {
  return {
    type: types.ADD_FAVORITE_FAILED,
  };
}

export function getSavedCities() {
  return {
    type: types.SAVED_CITY_REQUEST,
  };
}

export function getSavedCitiesSuccess(data) {
  return {
    type: types.SAVED_CITY_SUCCESS,
    data,
  };
}

export function getSavedCitiesFailed() {
  return {
    type: types.SAVED_CITY_FAILED,
  };
}

export function searchCityProcessing() {
  return {
    type: types.SEARCH_CITY_PROCESSING,
  };
}

export function closeWeatherCard() {
  return {
    type: types.CLOSE_WEATHER_CARD,
  };
}
