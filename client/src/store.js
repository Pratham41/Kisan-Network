import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  contactListReducer,
  contactDetailsReducer,
} from './redux/reducers/contactReducer';

import {messageListReducer, messageSendReducer } from './redux/reducers/messageReducer'



const reducer = combineReducers({
  contactList: contactListReducer,
  contactDetails: contactDetailsReducer,
  messageList : messageListReducer,
  messageSend : messageSendReducer
});


const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;