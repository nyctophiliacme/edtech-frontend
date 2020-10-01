import { baseURL } from "../config/appConfig";
import axios from "axios";

export const login = (email, password) => {
  return axios.post(`${baseURL}auth/login/`, {
    email: email,
    password: password,
  });
};

export const signup = (userDetails) => {
  return axios.post(`${baseURL}auth/registration/`, {
    username: userDetails.email,
    email: userDetails.email,
    password1: userDetails.password,
    password2: userDetails.confirmPassword,
    first_name: userDetails.firstName,
    last_name: userDetails.lastName,
    phone_number: userDetails.phoneNumber,
  });
};

export const getUserDetails = (token) => {
  return axios.get(`${baseURL}auth/user/`, {
    headers: {
      Authorization: token,
    },
  });
};
export const getAllExams=()=>{
  return axios.get(`${baseURL}exams/`);
}

export const loginWithFb = () => {

  return axios.post(`${baseURL}auth/rest-auth/facebook/`,{
    access_token:'EAAsTJY1zrOkBAFaD6RvROCZCnIzK5kCnUzo3foxjjqsYMjt0fjDLIFQgRyTse2jPTWXLRK1tqwNzorZC5xZAkV3rl5pYgoJPMSmLZAnLvOFcMWnML9u0SlptcwHDsJtlDYCFB982VfO43ThhvVneG69gIoE0Op8sBSjUDzhjl2knZBZCZBgzXkI7RmNoZBahUKqX3qZB7vlvFVmCFXUFYT91ZB'
  });
};
