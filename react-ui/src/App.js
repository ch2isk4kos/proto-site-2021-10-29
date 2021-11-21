import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppLayout from "./components/layout/AppLayout";
import { auth } from "./api/firebase/config";
import { onAuthStateChanged } from "@firebase/auth";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // listen for user state change
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("App -> unsubscribe -> user:", user);
      if (!!user) {
        dispatch({
          type: "CURRENT_USER",
          payload: {
            email: user.email,
            token: user.accessToken,
          },
        });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="App">
      <AppLayout />
    </div>
  );
};

export default App;
