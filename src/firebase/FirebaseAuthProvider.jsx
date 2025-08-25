import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const FirebaseAuthProvider = ({ children }) => {
  const userInfo = {};
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
