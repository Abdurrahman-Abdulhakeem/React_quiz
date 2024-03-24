import React, { useState } from "react";
import { useUser } from "./contexts/UserProvider";

import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { users } = useUser();

  const { username, email, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please enter all required fields");

    }else {
        
    const newUser = { ...data };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    navigate("/signin");
    }

  

    setData({
      username: "",
      email: "",
      password: "",
    });

   
  };

  return (
    <form onSubmit={handleSubmit} className="reg-form">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default Register;
