import { createContext, useEffect, useReducer } from "react";

const InitialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error:null
};

export  const AuthContext = createContext(InitialState);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
        return {
            user : null,
            loading: true,
            error: null,
        };
    case "LOGIN_SUCCESS":
        return {
            user : action.payload,
            loading: false,
            error: null,
        };
    case "LOGIN_FAILED":
        return {
            user : null,
            loading: false,
            error: action.payload,
        };
    case "LOGOUT":
        return {
            user : null,
            loading: false,
            error: null,
        };
    default: 
        return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, InitialState);

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
