import { baseURL } from "../config/appConfig";
import axios from "axios";

export const loginAdmin = (email, password) => {
  return axios.post(`${baseURL}auth/login/`, {
    email: email,
    password: password,
  });
};

export const createExam = (exam_code, title, course_id) => {
  return axios.post(`${baseURL}exams/`, {
    exam_code: exam_code,
    title: title,
    course_id: course_id,
  });
};

export const createSubject = (
  subject_code,
  title,
  exam_code,
  background_start_color,
  background_end_color
) => {
  return axios.post(`${baseURL}subjects/`, {
    subject_code: subject_code,
    title: title,
    exam_code: exam_code,
    background_start_color: background_start_color,
    background_end_color: background_end_color,
  });
};
export const createChapter = (
  chapter_code,
  title,
  subject_code,
  exam_code,
  is_locked
) => {
  return axios.post(`${baseURL}chapters/`, {
    chapter_code: chapter_code,
    title: title,
    subject_code: subject_code,
    exam_code: exam_code,
    is_locked: is_locked,
  });
};

export const getAllExams = () => {
  return axios.get(`${baseURL}exams/`);
};

export const getVerifiedUsers = () => {
  return axios.get(`${baseURL}auth/user/get_verified_users/`);
};

export const changePaidStatus = (email, paidStatus) => {
  if (paidStatus) {
    return axios.get(
      `${baseURL}auth/user/update_payment_information/mark_as_unpaid/?email_id=${email}`
    );
  } else {
    return axios.get(
      `${baseURL}auth/user/update_payment_information/mark_as_paid/?email_id=${email}`
    );
  }
};
