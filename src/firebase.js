import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from './FirebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.firestore();
firebase.auth();
export default firebase;
