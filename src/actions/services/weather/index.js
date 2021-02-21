import weatherSearvice from '../';
import * as Weather from './apiConstant';

export const registerUser = async (payload) => {
  try {
    return await weatherSearvice.post(Weather.ADD_USER, payload);
  } catch (error) {
    throw new Error();
  }
};

export const loginUser = async (payload) => {
  try {
    return await weatherSearvice.post(Weather.LOGIN, payload);
  } catch (error) {
    throw new Error();
  }
};

export const searchCity = async (payload) => {
  try {
    return await weatherSearvice.post(Weather.SEARCH_CITY, payload);
  } catch (error) {
    throw new Error();
  }
};

export const addFavorite = async (payload) => {
  try {
    return await weatherSearvice.post(Weather.ADD_FAVORITE, payload);
  } catch (error) {
    throw new Error();
  }
};

export const getCities = async () => {
  try {
    return await weatherSearvice.get(Weather.GET_CITIES);
  } catch (error) {
    throw new Error();
  }
};
