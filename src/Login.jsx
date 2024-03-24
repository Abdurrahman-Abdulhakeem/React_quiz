import React, { useEffect, useState } from "react";
import { useUser } from "./contexts/UserProvider";

import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { user: currentUser, dispatch } = useUser();

  const { username, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) alert("Please enter all required fields");

    dispatch({ type: "login", payload: [username[0], password[0]] });

    //  currentUser &&
    //   navigate("/dashboard");

    setData({
      username: "",
      password: "",
    });
  };

  useEffect(() => {
    currentUser && navigate("/dashboard");
  }, [currentUser, navigate]);

  return (
    <form onSubmit={handleSubmit} className="reg-form
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      <input type="submit" value="Sign In" />
    </form>
  );
}

export default Login;
