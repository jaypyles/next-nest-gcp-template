import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 1000,
});

const nextApi = axios.create({
  baseURL: "/api",
});

export { api, nextApi };
