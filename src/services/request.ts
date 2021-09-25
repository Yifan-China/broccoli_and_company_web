import type { AxiosResponse } from 'axios';
import axios from 'axios';

// 服务端在本地开发，测试环境与生产环境会有不同的 baseURL，可以在 config 中配置。
// 这个需求里 baseURL 在三个环境一致
import { config } from './enhancers/config';

const instance = axios.create({
  baseURL: config.baseURL,
});

function onResponseSuccess(response: AxiosResponse) {
  return response.data;
}

function onResponseError(error: any) {
  const response = error.response || {};
  const data = response.data || {};
  const errorMessage = data.errorMessage || '服务器出错啦'
  return Promise.reject(errorMessage);
}
if (instance) {
  instance.interceptors.response.use(onResponseSuccess, onResponseError);
}
export default instance;
