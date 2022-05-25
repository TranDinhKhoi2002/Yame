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

export default request;
