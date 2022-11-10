import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import app from "../Firebase/FireBaseConfig/FirebaseConfig";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();

  // create an account with email password =========
  const createWithEp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login with email password =========
  const LoginWithEp = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // On State change ==================
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscriber();
    };
  }, []);

  // login with Google

  const GoogleProvider = new GoogleAuthProvider()
  const loginWithGoogleProvider = () =>{
    return signInWithPopup(auth, GoogleProvider)
  }

  // login with git hub======================
  const GitHubProvider = new GithubAuthProvider()
  const loginWithGitHub = ()=>{
    return signInWithPopup(auth, GitHubProvider)
  }


  // sign out 

  const logOut = ()=>{
    return signOut(auth)
  }


  const authInfo = { auth, user, createWithEp, LoginWithEp, loginWithGoogleProvider, loginWithGitHub, logOut};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
