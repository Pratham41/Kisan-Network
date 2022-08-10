import axios from "axios"; // AXIOS

// GETTING CONSTANTS
import {
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_FAIL,
  CONTACT_DETAILS_FAIL,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS,
} from "../constants/contactContants";

// LIST ALL CONTACT ACTION
export const listContacts = () => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/user/showAllContacts", {}, config);
    dispatch({ type: CONTACT_LIST_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: CONTACT_LIST_FAIL, payload: error });
  }
};

// CONTACT DETAIL ACTION
export const listContactDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_DETAILS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`/user/showContact/${id}`, {}, config);

    dispatch({ type: CONTACT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CONTACT_DETAILS_FAIL, payload: error });
  }
};
