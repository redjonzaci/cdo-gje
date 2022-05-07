import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

const AuthContext = createContext(null);

export function useAuth(): any {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = useState({});

  function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log(value))
      .catch((err) => console.log(err));
  }

  function signOut() {
    return auth.signOut();
  }

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((value) => console.log(value))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) =>
      setCurrentUser(user)
    );
    return () => unsubscribe();
  }, []);

  const value: any = {
    currentUser,
    signIn,
    signOut,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
