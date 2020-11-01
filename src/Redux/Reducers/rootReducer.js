import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import noteReducer from './noteReducer';
import modalReducer from './modalReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  note: noteReducer,
  modal: modalReducer,
  home: homeReducer,
});
