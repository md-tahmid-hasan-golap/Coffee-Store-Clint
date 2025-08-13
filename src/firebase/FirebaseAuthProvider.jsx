import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const FirebaseAuthProvider = ({ children }) => {
  // set a user
  const [user, setUser] = useState(null);
  // set a loading
  const [loading, setLoading] = useState(true);

  //creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // SignInWithGoggle user
  const SignInWithGoggle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  // OnAuthChange User
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (crurrntUser) => {
      setUser(crurrntUser);
      setLoading(false);
      //   console.log(crurrntUser);
    });
    return () => {
      unSuscribe();
    };
  }, []);

  // signOut
  const LogOut = () => {
    return signOut(auth);
  };
  //   user data
  const userData = {
    user,
    setUser,
    loading,
    setLoading,
    creatUser,
    SignInWithGoggle,
    signInUser,
    LogOut,
  };
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
