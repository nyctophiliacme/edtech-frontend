import axios from "axios";
import { localBaseURL } from "../config/appConfig";

export const getAllExams=()=>{
  return axios.get(`${localBaseURL}/courses/`);
}