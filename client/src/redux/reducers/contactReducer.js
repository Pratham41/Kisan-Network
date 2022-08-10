// GETTING CONSTANTS
import {
    CONTACT_LIST_SUCCESS,
    CONTACT_LIST_REQUEST,
    CONTACT_LIST_FAIL,
    CONTACT_DETAILS_FAIL,
    CONTACT_DETAILS_REQUEST,
    CONTACT_DETAILS_SUCCESS
  } from '../constants/contactContants';
  
  // CONTACT LIST REDUCER
  export const contactListReducer = (state = { allContacts: [] }, action) => {
    switch (action.type) {
      case CONTACT_LIST_REQUEST:
        return { loading: true, allContacts: [] };
      case CONTACT_LIST_SUCCESS:
        return { loading: false, allContacts: action.payload };
      case CONTACT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // CONTACT DETAILS REDUCER
  export const contactDetailsReducer = (state = { contact: null }, action) => {
    switch (action.type) {
      case CONTACT_DETAILS_REQUEST:
        return { loading: true, ...state };
      case CONTACT_DETAILS_SUCCESS:
        return { loading: false, contact: action.payload };
      case CONTACT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };