import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_0CjAM2t4pbkeIYeD-zSJg6rFcDntzYU",
  authDomain: "anything-project-f47d1.firebaseapp.com",
  projectId: "anything-project-f47d1",
  storageBucket: "anything-project-f47d1.appspot.com",
  messagingSenderId: "577680778392",
  appId: "1:577680778392:web:6717b386dc14ee097d5ced",
  measurementId: "G-PH5V545H8F",
};

firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const userId = result.user.uid;
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("userID", userId);
      firestore
        .collection("users")
        .doc(userId)
        .set({
          name: localStorage.getItem("name"),
          email: localStorage.getItem("email"),
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {})
    .catch(function (error) {});
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = localStorage.setItem(user.id);
    console.log(uid);
  } else {
    // User is signed out
    // ...
  }
});

const usersRef = doc(
  db,
  "users",
  "jThKOqJbDCPkdGQS0PBumP9vhat2",
  "FavBooks",
  "P0yHYk7Jzx5oxHMPDE4x"
);
console.log(usersRef);

export default firebase;
