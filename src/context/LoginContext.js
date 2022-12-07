import { useState } from "react";
import { createContext } from "react";


const LoginContext = createContext(false)

const LoginProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState();

    return <LoginContext.Provider value={{isLogin, setIsLogin}} >
        {children}
    </LoginContext.Provider>
}

export {LoginContext, LoginProvider}