import { notification } from 'antd';
import axios from 'axios';
import LocalStorageService from '../services/LocalStorageService';
// import { BASE_BACKEND_URL } from './constants';

// axios.defaults.baseURL = BASE_BACKEND_URL;
axios.defaults.baseURL = 'http://localhost:8000';

axios.interceptors.request.use(
  (config) => {
    if (config.url.includes('/login')) {
      return config;
    }

    const token = LocalStorageService.getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response?.status === 401) {
      LocalStorageService.removeToken();
      notification.error({
        message: 'กรุณาเข้าสู่ระบบใหม่',
        placement: 'topRight',
      });
      window.location.reload();

      return Promise.reject(err);
    }

    return Promise.reject(err);
  }
);

export default axios;
