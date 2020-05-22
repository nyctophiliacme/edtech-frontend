import { baseURL } from "../config/appConfig";
import axios from "axios";

export const login = (email, password) => {
  return axios
    .post(`${baseURL}auth/login/`, { email: email, password: password });
};
