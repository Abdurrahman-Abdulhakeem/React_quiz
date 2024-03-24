import "./App.css";

import { useUser } from "./contexts/UserProvider";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Register";
import { useEffect } from "react";
import Dashboard from "./Dashboard";
import LoginRequired from "./LoginRequired";
import Login from "./Login";

function App() {
  // const { users } = useUser();


  // const navigate = useNavigate();

  // useEffect(() => {
  //   !users ? navigate("/signup") : navigate("/dashboard");
  // }, [users]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        {/* <Route path="/signin" element={< Register />} /> */}

        <Route path="/dashboard" element={<LoginRequired> <Dashboard /> </LoginRequired>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
