import axios from "axios";

const request = axios.create({
  baseURL: "https://yame-bff35-default-rtdb.firebaseio.com/",
});

export const get = async (path, options = {}) => {
  try {
    const response = await request.get(`${path}.json`, options);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getProduct = async (path) => {
  try {
    const response = await request.get("products.json");

    const data = response.data;
    const key = Object.keys(data).find((key) => data[key].to === path);
    return data[key];
  } catch (err) {
    console.log(err.message);
  }
};

export default request;
