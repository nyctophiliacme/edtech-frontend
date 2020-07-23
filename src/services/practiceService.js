import { baseURL } from "../config/appConfig";
import axios from "axios";

export const getSubjects = (exam_code) => {
  const axiosParams = {
    exam_code: exam_code}

  return axios.get(`${baseURL}subjects/exam_vise`,{
    params:axiosParams
  });
};

export const getChapters = (exam_code, subject_code) => {
  return axios.get(`${baseURL}chapters/subject_vise`, {
    headers: {
      Authorization: sessionStorage.getItem("userToken"),
    },
    params: { exam_code, subject_code },
  });
};

export const getChaptersGuest = (exam_code, subject_code) => {
  return axios.get(`${baseURL}chapters/subject_vise_guest/`, {
    params: { exam_code, subject_code },
  });
};
