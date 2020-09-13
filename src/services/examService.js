import { baseURL } from "../config/appConfig";
import axios from "axios";


export const getAllExams=()=>{
  return axios.get(`${baseURL}exams`);
}
export const getExamSideNav = (exam_code) => {

  return axios.get(`${baseURL}/exam_data/section_container_exam_vise`, {
    params: {
      exam_id: 1
    }
  });
  
};
export const getExamStaticData = (section_container_1d) => {
  return axios.get(`${baseURL}/exam_data/section_details_container_vise/`, {
    params: {
      exam_section_container_id: section_container_1d
    }
  });
  
};



