import { baseURL } from "../config/appConfig";
import axios from "axios";

export const getSubjects = (exam_code) => {
  const axiosParams = {
    exam_code: exam_code
}
  return axios.get(`${baseURL}subjects/exam_vise`,{
    params:axiosParams
  });
};

export const getChapters = (exam_code, subject_code) => {
  return axios.get(`${baseURL}chapters/subject_vise`, {
    params: { exam_code, subject_code },
  });
};
