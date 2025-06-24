import axios from "axios";
import qs from "qs";
import { BookQueryType } from "../type/book";
import request from "../utils/request";

export const getBooks = async (params?: BookQueryType) => {
  const queryString = qs.stringify(params);
  const result = await request.get(
    `https://mock.apifox.cn/m1/2398938-0-default/api/books?${queryString}`
  );
  const res = result.data;
  return res;
};
