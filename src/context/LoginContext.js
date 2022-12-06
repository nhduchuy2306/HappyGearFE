import { useState } from "react";
import { createContext } from "react";


const LoginContext = createContext(false)

const LoginProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const value = {isLogin, setIsLogin}

    return <LoginContext.Provider value={value} >
        {children}
    </LoginContext.Provider>
}

export {LoginContext, LoginProvider}