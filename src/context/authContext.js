import { createContext, useState, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const sessionURL = "/auth/session";

  useEffect(() => {
    axios.get(sessionURL).then((response) => {
      if (response) {
        const { username, email, isAdmin } = response.data;
        setAuth({ username, email, isAdmin });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
