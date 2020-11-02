import { register, login, logOut } from './authActions';
import { ShowModal, OnCancel, OnOk, changeNoteText } from './modalActions';
import {
  addNewNote,
  deleteNote,
  addToTrash,
  addToArchive,
  changeText,
  removeFromArchive,
  changeCardTheme,
  recoverNote,
  startLoadingCard,
  stopLoadingCard,
} from './noteActions';
import {
  refreshPage,
  loadHomeData,
  loadArchiveData,
  loadTrashData,
  loadSearchedData,
  changeSearchText,
  showUserCard,
  hideUserCard,
  enableDarkMode,
  disableDarkMode,
} from './homeActions';

import {
  setPhotoToStorage,
  setImageToLocal,
  getUserImage,
  showImageError,
} from './userActions';

const actions = {
  logOut,
  login,
  register,
  ShowModal,
  OnCancel,
  OnOk,
  deleteNote,
  addNewNote,
  addToArchive,
  addToTrash,
  changeText,
  refreshPage,
  loadHomeData,
  loadArchiveData,
  removeFromArchive,
  loadTrashData,
  changeCardTheme,
  recoverNote,
  loadSearchedData,
  changeSearchText,
  changeNoteText,
  startLoadingCard,
  stopLoadingCard,
  showUserCard,
  hideUserCard,
  setPhotoToStorage,
  setImageToLocal,
  getUserImage,
  showImageError,
  enableDarkMode,
  disableDarkMode,
};
export default actions;
