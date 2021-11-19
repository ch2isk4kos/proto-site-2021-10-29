// Firebase v9.4 imports
import { initializeApp } from "firebase/app";
import {
  getAuth,
  isSignInWithEmailLink,
  // onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  GoogleAuthProvider,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyA-rue-O4kbJIFNEmI91Dr07cNMcULe5aY",
  authDomain: "proto-site-2021-10-29.firebaseapp.com",
  projectId: "proto-site-2021-10-29",
  storageBucket: "proto-site-2021-10-29.appspot.com",
  messagingSenderId: "699197766001",
  appId: "1:699197766001:web:62cbbcb2fb5a7c18731ed0",
};

// initialize
const app = initializeApp(config);
const auth = getAuth(app);
console.log("api/firebase: auth -> ", auth);

export const provider = new GoogleAuthProvider();
console.log("api/firebase: provider -> ", provider);

// signup
export const sendVerificationLink = async (email, options) => {
  await sendSignInLinkToEmail(auth, email, options);
};

// signin
export const signInWithEmail = async (email, location) => {
  await signInWithEmailLink(auth, email, location);
};

// export const signInWithEmail = async (email, location) => {
//   const options = {
//     url: location,
//     handleCodeInApp: true,
//   };
//   await sendSignInLinkToEmail(auth, email, options);
//   // Obtain emailLink from the user.
//   if (isSignInWithEmailLink(auth, location)) {
//     await signInWithEmailLink(email, email, location);
//   }
// };

// create/update user

// current user: https://firebase.google.com/docs/auth/web/manage-users
// const getCurrentUser = async (user) => {
//   await onAuthStateChanged(auth, (u) => {
//     if ()
//   })
// }
export const getCurrentUser = () => {
  return !!auth.currentUser;
};
