import { baseURL } from "../config/appConfig";
import axios from "axios";

export const login = (email, password) => {
  return axios.post(`${baseURL}auth/login/`, {
    email: email,
    password: password,
  });
};

export const register = (
  username,
  email,
  password,
  confirmPassword,
  first_name,
  last_name,
  phone_number
) => {
  return axios.post(`${baseURL}auth/registration/`, {
    username: username,
    email: email,
    password1: password,
    password2: confirmPassword,
    first_name: first_name,
    last_name: last_name,
    phone_number: phone_number,
  });
};
