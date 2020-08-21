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
export const createQuestion = (
  question_text,
  difficulty_level,
  explanation,
  question_img_url,
  explanation_img_url,
  chapter_id,
  question_choice_1,
  question_choice_2,
  question_choice_3,
  question_choice_4,
  correct_choice,
  question_choice_1_image_url,
  question_choice_2_image_url,
  question_choice_3_image_url,
  question_choice_4_image_url
) => {
  return axios.post(`${baseURL}questions/save_data/`, {
    question_text: question_text,
    question_img_url: question_img_url,
    difficulty_level: difficulty_level,
    explanation:explanation,
    explanation_img_url: explanation_img_url,
    chapter_id: chapter_id,
    question_choice_1: question_choice_1,
    question_choice_2: question_choice_2,
    question_choice_3: question_choice_3,
    question_choice_4: question_choice_4,
    correct_choice: correct_choice,
    question_choice_1_image_url: question_choice_1_image_url,
    question_choice_2_image_url: question_choice_2_image_url,
    question_choice_3_image_url: question_choice_3_image_url,
    question_choice_4_image_url: question_choice_4_image_url,
  });
};
