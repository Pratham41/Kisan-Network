import axios from "axios"; // AXIOS

// GETTING CONSTANTS
import {
  MESSAGE_LIST_FAIL,
  MESSAGE_LIST_REQUEST,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_SEND_FAIL,
  MESSAGE_SEND_REQUEST,
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_RESET
} from "../constants/messageConstants";

// LIST ALL MESSAGE ACTION
export const listMessages = () => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/user/showAllMessages", {}, config);
    dispatch({ type: MESSAGE_LIST_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: MESSAGE_LIST_FAIL, payload: error });
  }
};

// LIST ALL MESSAGE ACTION
export const sendMessages = (id,mobileNumber,bodyToSend,otp,timeNow) => async (dispatch) => {
    try {
      dispatch({ type: MESSAGE_SEND_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/user/sendotp", {id,mobileNumber,bodyToSend,otp, timeNow}, config);
      dispatch({ type: MESSAGE_SEND_SUCCESS, payload: data.result });
      
      setTimeout(() => {
        dispatch({ type: MESSAGE_SEND_RESET, payload: {} });
      }, 3000);

    } catch (error) {
      dispatch({ type: MESSAGE_SEND_FAIL, payload: error });
    }
  };

  //