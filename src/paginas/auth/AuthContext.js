import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};