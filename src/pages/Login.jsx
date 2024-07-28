/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import "./Login.css"
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
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
          const res = await axios.post(`${import.meta.env.VITE_BACKENED_URL}/api/auth/login`, credentials);
          // console.log("res", res)
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          navigate("/")
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
          Don't have an account <Link to="/register">Register</Link>
        </div>
        {
          loading && <CircularProgress />
        }
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}

export default Login