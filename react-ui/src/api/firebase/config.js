// Firebase v9.4 imports
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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

// exports
export const auth = getAuth(app);
console.log("api/firebase: auth -> ", auth);

export const provider = new GoogleAuthProvider();
console.log("api/firebase: provider -> ", provider);
