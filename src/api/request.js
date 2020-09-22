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
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
//  请求返回之后执行
instance.interceptors.response.use(
  function (response) {
    if (response.data.code === 200) {
      return response.data;
    }
    return Promise.reject(response.data.msg)
  },
  function (error) {
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


