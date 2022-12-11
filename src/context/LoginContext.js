import { useState } from "react";
import { createContext } from "react";

const LoginContext = createContext(false);

const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState();

  return (
    <LoginContext.Provider
      value={{
        login,
        setLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
