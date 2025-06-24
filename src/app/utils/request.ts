import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Router from "next/router";
import { message as AntdMessage } from "antd";

interface AxiosInstanceType extends AxiosInstance {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  request<T = any>(config: AxiosRequestConfig): Promise<T>;
}

export const CreateAxiosInstance = (config?: AxiosRequestConfig) => {
  const service = axios.create({
    timeout: 5000,
    ...config,
  });

  service.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    (response) => {
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        return Router.push("/login");
      } else {
        AntdMessage.error(response.data?.message || "请求失败");
      }
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        return Router.push("/login");
      }
      AntdMessage.error(error?.response?.data?.message || "请求失败");
      return Promise.reject(error);
    }
  );
  return service;
};
export default CreateAxiosInstance({});
