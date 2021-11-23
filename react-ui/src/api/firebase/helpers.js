import { auth, provider } from "./config";
import {
  getAuth,
  getIdTokenResult,
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  GoogleAuthProvider,
} from "firebase/auth";

// email verificaiton link
export const sendVerificationLink = (email, options) => {
  return sendSignInLinkToEmail(auth, email, options);
};

// signup
export const signInWithEmail = (email, location) => {
  return signInWithEmailLink(auth, email, location);
};

// update password
export const updateUserPassword = (user, password) => {
  return updatePassword(user, password);
};

// get user id token
export const getUserIdToken = (user) => {
  return getIdTokenResult(user, true);
};

// signin
export const signInLocally = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const sendPasswordReset = (email) => {
  const config = {
    url: "http://localhost:3000/signin",
    // url: `${process.env.REACT_APP_REGISTER_REDIRECT_URL}`,
    handleCodeInApp: true,
  };
  return sendPasswordResetEmail(auth, email, config);
};

// sign out
export const signOutUser = () => {
  return signOut(auth);
};

// listen for user state change
// export const listenForChangesToUserState = () => {
//   return onAuthStateChanged(auth, async (user) => {
//     if (!!user) {
//       // getIdTokenResult(user).then((res) => {
//       //   console.log(
//       //     "helpers -> listenForUserStateChange -> getIdTokenResult -> res:",
//       //     res
//       //   );
//       //   return res.token;
//       // });
//       return user;
//     }
//   });
// };

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
