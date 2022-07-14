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

    const data = await response.data;
    const key = Object.keys(data).find((key) => data[key].to === path);
    return data[key];
  } catch (err) {
    console.log(err.message);
  }
};

export const postOrder = async (path, order, options = {}) => {
  try {
    const response = await request.post(`${path}.json`, order, options);

    const data = await response.data;
    if (!data) {
      throw new Error("Failed to confirm your order");
    }

    return true;
  } catch (err) {
    console.log(err.message);
  }
};

export const checkValidUser = async (userName, password) => {
  try {
    const response = await request.get("users.json");

    const data = await response.data;
    if (data) {
      return true;
    }

    return false;
  } catch (err) {
    console.log(err.message);
  }
};

export default request;
