import axios from "axios";
import { compareSync } from "bcryptjs";

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
    console.log(err.message || "Failed");
  }
};

export const getExistingUser = async (userName) => {
  const response = await request.get("users.json");
  const data = await response.data;
  const key = Object.keys(data).find((key) => data[key].userName === userName);

  if (key) {
    return data[key];
  }
  return null;
};

export const postUser = async (newUser) => {
  const isExistingUser = await getExistingUser(newUser.userName);
  if (!isExistingUser) {
    const response = await request.post("users.json", newUser);

    const data = await response.data;
    return data;
  } else {
    return { message: "user already exists" };
  }
};

export const checkValidUser = async (userName, password) => {
  const existingUser = await getExistingUser(userName);
  if (existingUser) {
    const isValidPassword = compareSync(password, existingUser.hashedPassword);
    return isValidPassword;
  }

  return false;
};

export default request;
