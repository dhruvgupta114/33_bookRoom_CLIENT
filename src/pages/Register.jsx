/* eslint-disable no-unused-vars */
import React from 'react'
import axios from "axios";
import { useContext, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
      });
    
      const { user,loading, error, dispatch } = useContext(AuthContext);
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post(`${import.meta.env.VITE_BACKENED_URL}/api/auth/register`, credentials);
          // console.log("res", res)
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          navigate("/login")
        } catch (err) {
          dispatch({ type: "LOGIN_FAILED", payload: err.response.data });
        }
      };
      // console.log("user after login",user)

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <div>
          Already have an account <Link to="/login">Login</Link>
        </div>
        {
          loading && (<>
          
          <CircularProgress />
          <p>Wait it will take some time</p>
          </> )
        }
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}

export default Register