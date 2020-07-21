import axios from "axios";
import { baseURL } from "../config/appConfig";

export const getAllCourses=()=>{
  return axios.get(`${baseURL}courses/get_all/`);
}
export const getAllSubjectForCourse=(course_id)=>{
  return axios.get(`${baseURL}/subjects/course_vise`, {
    params: {
      course_id: course_id
    }
  });

}
export const getAllExamForCourse=(course_id)=>{
  return axios.get(`${baseURL}/exams/course_vise`, {
    params: {
      course_id: course_id
    }
  });

}