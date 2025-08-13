import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const FirebaseAuthProvider = ({ children }) => {
  // set a user
  const [user, setUser] = useState(null);
  // set a loading
  const [loading, setLoading] = useState(true);

  //creat user
  const creatUser = (email, password) => {
    return;
  };

  // SignIn User
  const signInUser = (email, password) => {
    return;
  };
  // SignInWithGoggle user
  const SignInWithGoggle = () => {
    return;
  };

  // OnAuthChange User
  //   useEffect(() => {
  //     const unSuscribe =
  //   }, []);
  // user data
  const userData = {
    user,
    setUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
