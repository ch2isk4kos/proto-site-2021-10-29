import { auth } from "./config";
import {
  getAuth,
  getIdTokenResult,
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
  updatePassword,
  GoogleAuthProvider,
} from "firebase/auth";

// signup
export const sendVerificationLink = (email, options) => {
  return sendSignInLinkToEmail(auth, email, options);
};

// signin
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
export const getCurrentUser = () => {
  return !!auth.currentUser;
};
