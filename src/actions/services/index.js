import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://localhost:3000/v1/',
  timeout: 5000,
});

instance.interceptors.request.use(
  async function (config) {
    const value = await AsyncStorage.getItem('@token');
    config.headers = {
      ...config.headers,
      'x-auth': value,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
