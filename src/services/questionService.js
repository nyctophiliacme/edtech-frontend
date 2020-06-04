import { baseURL } from "../config/appConfig";
import axios from "axios";

export const getQuestions = (chapter_id) => {
    const axiosParams = {
      chapter_id: chapter_id
  }
    return axios.get(`${baseURL}questions/practice`,{
      headers: {
        Authorization: sessionStorage.getItem("userToken"),
      },
      params:axiosParams
    });
  };