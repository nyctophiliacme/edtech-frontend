import axios from "axios";
import { baseURL } from "../config/appConfig";

export const getAllCourses=()=>{
  return axios.get(`${baseURL}courses/get_all/`);
}
export const getAllSubjects=()=>{
  return axios.get(`${baseURL}subjects`);
}