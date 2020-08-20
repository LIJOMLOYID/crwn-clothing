import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTO0s9Z4UCpSOGnhMT1uc-2RAk2q-Ah6M",
  authDomain: "crwn-db-6aac3.firebaseapp.com",
  databaseURL: "https://crwn-db-6aac3.firebaseio.com",
  projectId: "crwn-db-6aac3",
  storageBucket: "crwn-db-6aac3.appspot.com",
  messagingSenderId: "882878328966",
  appId: "1:882878328966:web:fde19d7a9ccd9bf279e107",
  measurementId: "G-13LPB96Z1D",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
