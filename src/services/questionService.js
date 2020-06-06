import { baseURL } from "../config/appConfig";
import axios from "axios";

export const getQuestions = (chapter_id) => {
  const axiosParams = {
    chapter_id: chapter_id,
  };
  return axios.get(`${baseURL}questions/practice`, {
    headers: {
      Authorization: sessionStorage.getItem("userToken"),
    },
    params: axiosParams,
  });
};

export const submitAnswer = (userId,questionId,questionChoiceID,chapterId,subjectCode,examCode,isCorrect) => {
  return axios.post(
    `${baseURL}user_progress/question_answered/`,
    {
      user: userId,
      question: questionId,
      question_choice: questionChoiceID,
      chapter: chapterId,
      subject_code: subjectCode,
      exam_code: examCode,
      is_correctly_solved: isCorrect,
    },
    {
      headers: {
        Authorization: sessionStorage.getItem("userToken"),
      },
    }
  );
};
