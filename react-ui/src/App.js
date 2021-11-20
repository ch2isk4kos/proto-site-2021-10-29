import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppLayout from "./components/layout/AppLayout";
import { onUserStateChange } from "./api/firebase/helpers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppLayout />
    </div>
  );
};

export default App;
