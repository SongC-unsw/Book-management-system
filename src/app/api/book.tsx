import axios from "axios";
import qs from "qs";
import { BookQueryType, BookType } from "../type/book";
import request from "../utils/request";
const baseUrl = "https://mock.apifox.cn/m1/2398938-0-default/api";

export const getBooks = async (params?: BookQueryType) => {
  const queryString = qs.stringify(params);
  const result = await request.get(`${baseUrl}/books?${queryString}`);
  const res = result.data;
  return res;
};

export const bookAdd = async (data: BookType) => {
  const result = await request.post(`${baseUrl}/books`, data);
  const res = result.data;
  return res;
};
