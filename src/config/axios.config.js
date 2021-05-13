import axios from "axios";
import { storeGetAccessToken } from "../services/store.service";

let baseAPIURL = 'https://foodnavigator.api.dev.farmbook.co';
if(!window.location.hostname.includes('dev') && !window.location.hostname.includes('localhost')){
  // config path api production
  // ! if your get domain site production you can replace url
  baseAPIURL = 'https://api.foodnavigator.co';
}
axios.defaults.baseURL = baseAPIURL;
//axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    if (config.url.includes("/authAPI")) {
      return config;
    }
    const token = storeGetAccessToken();
    if (token !== null) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log('intercep error')
    throw error;
  }
);

axios.interceptors.response.use(
  (config) => {
    // if (!config?.data?.status) {
    //   if (config?.data?.msg?.info === "Token is expired") {
    //     localStorage.removeItem("store");
    //     window.location.reload();
    //     return  Promise.reject(config?.data?.msg?.info)
    //   }
    //   return  Promise.reject(config?.data?.msg?.info)
    // }
    return config;
  },
  (error) => {
    console.log(error);
    // if (error.response.status === 401) {
    //   localStorage.removeItem(getAccessToken());

    //   window.location.reload();
    // }
    return Promise.reject(error);
  }
);

export default axios;
