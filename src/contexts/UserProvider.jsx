import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  user: JSON.parse(localStorage.getItem("user")) || null,

  status: "empty",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      const user = state.users?.find(
        (user) =>
          user.username[0] === action.payload[0] &&
          user.password[0] === action.payload[1]
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        return (window.location.pathname = "/dashboard");
      } else {
        alert("Incorrect username or password");
      }
      break;

    case "logout":
      return localStorage.removeItem("user");
  
    default:
      return initialState;
  }
};

function UserProvider({ children }) {
  const [{ users, user }, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider
      value={{
        users: users,
        user: user,
        dispatch: dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

export const useUser = () => {
  const state = useContext(UserContext);
  return state;
};
