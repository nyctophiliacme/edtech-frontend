import { baseURL } from "../config/appConfig";
import axios from "axios";

export const loginAdmin = (email, password) => {
  return axios.post(`${baseURL}auth/login/`, {
    email: email,
    password: password,
  });
};

export const createExam = (exam_code, title) => {
  return axios.post(`${baseURL}exams/`, {
    exam_code: exam_code,
    title: title,
  });
};