import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;

    async function initializeUser(user) {
      if (user) {
        setCurrentUser({ ...user });
        setUserLoggedIn(true);
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
      setIsLoading(false);
    }
  }, []);

  const value = {
    currentUser,
    userLoggedIn,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of the AuthProvider.");
  return context;
};
