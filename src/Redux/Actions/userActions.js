import * as actionTypes from '../Types';
import firebase from '../../firebase';

export const showImageError = (err) => (dispatch) => {
  dispatch({ type: actionTypes.SELECT_PHOTO_ERR, err });
};

export const setPhotoToStorage = (file, uid) => async (dispatch) => {
  const imageRef = await firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('images');

  const uploadTask = firebase.storage().ref(`/images/${file.name}`).put(file);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      );
      dispatch({ type: actionTypes.CHANGE_PROGRESS, progress });
      dispatch({ type: actionTypes.START_LOADER });
    },
    (error) => {
      dispatch({ type: actionTypes.SELECT_PHOTO_ERR, err: error.message });
      dispatch({ type: actionTypes.CHANGE_PROGRESS_ERR });
    },
    () => {
      firebase
        .storage()
        .ref('images')
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          imageRef.add({ date: new Date(), profilePhotoUrl: url });
        });
      dispatch({ type: actionTypes.STOP_LOADER });

      dispatch({ type: actionTypes.CHANGE_PROGRESS, progress: 0 });
    },
  );
};

export const setImageToLocal = (imageUrl) => (dispatch) => {
  dispatch({ type: actionTypes.SET_IMAGE_URL, imageUrl });
};

export const getUserImage = (imageArr) => {
  if (!imageArr) {
    return null;
  }
  const image = Object.values(imageArr).map((profileImage) => profileImage);
  const firstImage = image[0].profilePhotoUrl;
  return firstImage;
};
