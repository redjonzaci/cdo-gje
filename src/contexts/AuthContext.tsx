import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function useAuth(): any {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = useState({});

  // TODO Reimplement authentication using local API

  const value: any = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
