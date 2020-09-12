import { baseURL } from "../config/appConfig";
import axios from "axios";

export const help = (isGuestUser, userFirstName, userEmail, message) => {
  return axios.post(
    `${baseURL}help/raise_request/`,
    {
      is_guest_user: isGuestUser,
      user_first_name: userFirstName,
      user_email: userEmail,
      message: message
    }
  );
};
