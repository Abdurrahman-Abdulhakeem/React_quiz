import React from "react";
import { logoutAction, useUser } from "./contexts/UserProvider";
export default function Main({ children }) {
  const { user, dispatch } = useUser();

  const logoutUser = () => {
    window.location.reload();
    window.location.pathname = "/signin";

    logoutAction();
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
