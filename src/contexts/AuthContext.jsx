import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (data) => {
    setUser(data);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={
      {
        user,
        handleLogin,
        handleLogout,
      }
    }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;