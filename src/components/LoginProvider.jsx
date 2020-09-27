import React, { createContext, useReducer } from "react"

export const LoginContext = createContext({})

const initialState = {
    isLogin : false
}

function LoginReducer(state,action) {
    switch (action.type) {
        case "SET_LOGIN":
            return {
                ...state,
                isLogin : action.payload
            }
    }
}
function LoginProvider({children}) {
    const [loginState , loginDispatch] = useReducer(
        LoginReducer,initialState
    )
    function setLogin(payload) {
        loginDispatch({type:"SET_LOGIN",payload:true})
    }
    return (
        <LoginContext.Provider value={{loginState,setLogin}}>
            {children}
        </LoginContext.Provider>
    )

}
export default LoginProvider;