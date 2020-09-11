import axios from "axios";

// http://xxx.xx.com/api/user-info?id=11

const instance = axios.create({
    baseURL: 'http://xxx.xx.com/api',
    timeout: 5000,
  });
  
  // Add a request interceptor
  //  全局请求拦截，发送请求之前执行
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      // 设置请求的 token 等等
      // config.headers["authorization"] = "Bearer " + getToken();
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  //  请求返回之后执行
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  /**
 * get请求
 * @param {*} url     请求地址
 * @param {*} params
 */
export function get(url, params) {
  return instance.get(url, {
    params,
  });
}

/**
 * post请求
 * @param {*} url     请求地址
 * @param {*} data
 */
export function post(url, data) {
  return instance.post(url, data);
}


  