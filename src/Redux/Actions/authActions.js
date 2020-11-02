import Firebase from '../../firebase';
import * as ActionTypes from '../Types';

export const register = (credentials) => async (dispach) => {
  dispach({ type: ActionTypes.START_LOADER });
  try {
    const createdUser = await Firebase.auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password,
    );
    // * Updating displayName of user with username
    createdUser.user.updateProfile({
      displayName: credentials.username,
    });
    const { uid } = createdUser.user;
    // * Adding basic user details in Firestore
    Firebase.firestore().collection('users').doc(uid).set({
      username: credentials.username,
      email: credentials.email,
    });

    dispach({ type: ActionTypes.REGISTER });
  } catch (error) {
    dispach({ type: ActionTypes.REGISTER_ERR, err: error.message });
  } finally {
    dispach({ type: ActionTypes.STOP_LOADER });
  }
};
export const login = (credentials) => async (dispach) => {
  dispach({ type: ActionTypes.START_LOADER });
  try {
    await Firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    );
    dispach({ type: ActionTypes.SIGN_IN });
  } catch (error) {
    dispach({ type: ActionTypes.SIGN_IN_ERR, err: error.message });
  } finally {
    dispach({ type: ActionTypes.STOP_LOADER });
  }
};
export const logOut = () => async (dispach) => {
  dispach({ type: ActionTypes.START_LOADER });

  try {
    await Firebase.auth().signOut();
    dispach({ type: ActionTypes.SIGN_OUT });
  } catch (error) {
    dispach({ type: ActionTypes.SIGN_OUT_ERR, err: error.message });
  } finally {
    dispach({ type: ActionTypes.STOP_LOADER });
  }
};

export const signInWithGoogle = (firebase) => async (dispach) => {
  dispach({ type: ActionTypes.START_LOADER });
  try {
    firebase.login({
      provider: 'google',
      type: 'popup',
    });
  } catch (error) {
    dispach({ type: ActionTypes.SIGN_IN_ERR, err: error.message });
  } finally {
    dispach({ type: ActionTypes.STOP_LOADER });
  }
};
