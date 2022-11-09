import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscriber();
    };
  }, []);

  const authInfo = { auth, user, createWithEp, LoginWithEp};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
