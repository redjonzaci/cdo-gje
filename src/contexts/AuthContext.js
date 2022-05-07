import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log(value))
      .catch((err) => console.log(err));
  }

  function signOut() {
    return auth.signOut();
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((value) => console.log(value))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signIn,
    signOut,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
