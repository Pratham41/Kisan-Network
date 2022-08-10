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

// MESSAGE LIST REDUCER
export const messageListReducer = (state = { allMessages: [] }, action) => {
  switch (action.type) {
    case MESSAGE_LIST_REQUEST:
      return { loading: true, allMessages: [] };
    case MESSAGE_LIST_SUCCESS:
      return { loading: false, allMessages: action.payload };
    case MESSAGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    
    default:
      return state;
  }
};

// SEND MESSAGE REDUCER
export const messageSendReducer = (state = { called: false }, action) => {
  switch (action.type) {
    case MESSAGE_SEND_REQUEST:
      return { loading: true, called: false };
    case MESSAGE_SEND_SUCCESS:
      return {
        loading: false,
        called: true,
        success: true,
        sent: action.payload,
      };
    case MESSAGE_SEND_FAIL:
      return {
        loading: false,
        called: false,
        success: false,
        error: action.payload,
      };
    case MESSAGE_SEND_RESET:
        return {...state, called:false};
    default:
      return state;
  }
};
