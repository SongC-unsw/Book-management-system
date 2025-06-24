import axios from "axios";

export const getBooks = async () => {
  const result = await axios.get(
    "https://mock.apifox.cn/m1/2398938-0-default/api/books"
  );
  const res = result.data.data;
  return res;
};
