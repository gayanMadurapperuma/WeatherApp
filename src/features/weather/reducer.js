import createReducer from '../../utils/createReducer';
import * as types from '../../constants/actionTypes';

const initialState = {
  searchProcessing: false,
  searchedWeatherData: null,
  showWeatherCard: false,
  notFound: false,
  savedCities: [],
};

export const weatherReducer = createReducer(initialState, {
  [types.SEARCH_CITY_PROCESSING](state, action) {
    return {
      ...state,
      searchProcessing: true,
    };
  },
  [types.SEARCH_CITY_SUCCESS](state, action) {
    const {data} = action;
    return {
      ...state,
      searchedWeatherData: data,
      searchProcessing: false,
      showWeatherCard: true,
    };
  },
  [types.SEARCH_CITY_FAILED](state, action) {
    return {
      ...state,
      searchedWeatherData: null,
      searchProcessing: false,
      showWeatherCard: true,
    };
  },
  [types.CLOSE_WEATHER_CARD](state, action) {
    return {
      ...state,
      showWeatherCard: false,
    };
  },
  [types.SAVED_CITY_SUCCESS](state, action) {
    const {data} = action;
    return {
      ...state,
      savedCities: data,
    };
  },
  [types.SAVED_CITY_FAILED](state, action) {
    return {
      ...state,
      savedCities: [],
    };
  },
});
