export const searchProcessing = (state) =>
  state?.weatherReducer?.searchProcessing ?? false;

export const isShowWeatherCard = (state) =>
  state?.weatherReducer?.showWeatherCard ?? false;

export const searchCityDetails = (state) =>
  state?.weatherReducer?.searchedWeatherData ?? false;

export const savedCityDetails = (state) =>
  state?.weatherReducer?.savedCities?.cities ?? [];
