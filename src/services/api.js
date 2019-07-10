import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://172.16.3.181:3333/',
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('@App:auth_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    console.tron.log(err);
  }
});

export default api;
