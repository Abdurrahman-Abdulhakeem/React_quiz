import React, { useEffect } from "react";
import { useUser } from "./contexts/UserProvider";
export default function Main({ children }) {
  const { user, dispatch } = useUser();


  const logoutUser = () => {
    window.location.reload();
    window.location.pathname = "/signin";
    dispatch({ type: "logout" });
  };

  return (
    <main>
      <header className="flex">
        <h2>Welcome {user?.username},</h2>
        <button onClick={logoutUser}>Logout</button>
      </header>
      <div className="question">{children}</div>
    </main>
  );
}
