import axios from "axios";

import { getErrorInterceptor } from "./getError";

export const BASE_URL = process.env.BASE_URL;

const headers: Record<string, string> = {
  "Content-Type": "application/json",
};

export const instance = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers,
});

getErrorInterceptor(instance);
