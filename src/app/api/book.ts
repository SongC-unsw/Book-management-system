import axios from "axios";
import qs from "qs";

export const getBooks = async (params?: any) => {
  const queryString = qs.stringify(params);
  const result = await axios.get(
    `https://mock.apifox.cn/m1/2398938-0-default/api/books?${queryString}`
  );
  const res = result.data.data;
  return res;
};
