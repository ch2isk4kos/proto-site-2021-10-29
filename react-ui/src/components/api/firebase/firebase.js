import * as firebase from "firebase/firebase";

const config = {
  apiKey: "AIzaSyA-rue-O4kbJIFNEmI91Dr07cNMcULe5aY",
  authDomain: "proto-site-2021-10-29.firebaseapp.com",
  projectId: "proto-site-2021-10-29",
  storageBucket: "proto-site-2021-10-29.appspot.com",
  messagingSenderId: "699197766001",
  appId: "1:699197766001:web:62cbbcb2fb5a7c18731ed0",
};

// initialize
firebase.initializeApp(config);

// firebase functionality
export const auth = firebase.auth(); // login a registered user
export const googleOAuthProvider = new firebase.auth.googleOAuthProvider(); // login in with google
