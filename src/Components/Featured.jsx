/* eslint-disable no-unused-vars */
import "./Featured.css";
import React from "react";
// import { useContext } from "react";
import useFetch from "../hooks/useFetch.js"
// import { AuthContext } from "../context/AuthContext.jsx";

const Featured = () => {
  const { data, loading, error } = useFetch(`${import.meta.env.VITE_BACKENED_URL + "/api/hotels/countByCity?cities=delhi,mumbai,bangalore"}`);
  // const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="featured">
      {loading ? (
        "Loading PLease wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://lh5.googleusercontent.com/proxy/lU7ZsqYWml90e4auYZqUXhTO-FaKAYd6K4yeQignD24wbmjNl0y_VZfyvnpboAgNRrs_Ow5PYyaAc0bdOCPkI_JRH9h1j_LTRN7aiPMp6KDfu5q82hJkL03pq9dM7hS9kqwLUn3TzypbxLGCJEKDIRKHSmcyhQ=w253-h188-k-no"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>DELHI</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>MUMBAI</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>BANGALORE</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
