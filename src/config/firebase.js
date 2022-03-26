import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJTp3WD1OldqFCMp2l6VBHFcXKfqOaEBU",
  authDomain: "blog-6a60c.firebaseapp.com",
  projectId: "blog-6a60c",
  storageBucket: "blog-6a60c.appspot.com",
  messagingSenderId: "443662063059",
  appId: "1:443662063059:web:d428ba67563cb2a7958b26",
  measurementId: "G-0R17FYG6ZR",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

export const signUp = async (name, email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
  await updateCurrentUser(auth, { displayName: name });
};

export const signIn = (email, pass) => {};
