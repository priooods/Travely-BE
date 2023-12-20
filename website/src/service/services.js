import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "http://localhost:8008/api";
client.defaults.timeout = 10000;
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ERR_CANCELED") {
      return Promise.resolve({ status: 499 });
    }
    return Promise.reject(error.response?.data || "Error");
  }
);
export default client;
