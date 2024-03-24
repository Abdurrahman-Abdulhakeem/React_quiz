import "./App.css";


import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Register";
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
