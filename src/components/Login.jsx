import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
  const toggleForm=()=>{  
    // event.preventDefault()
    setIsSignInForm(!isSignInForm)
  }
  return (
    <>
      <Header /> 
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="bg-netflux"
        />
      </div>
      <form
        action="#"
        className=" w-3/12 p-12 bg-black opacity-80 absolute mt-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="text-3xl py-4 font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
        <input
          type="text"
          placeholder="Full Name"
          className="my-4 p-4 bg-gray-700 w-full rounded-md"
        />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="my-4 p-4 bg-gray-700 w-full rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 bg-gray-700 w-full rounded-md"
        />
        <button className="p-4 my-6 w-full bg-red-600 rounded-lg cursor-pointer hover:bg-red-800">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4">{isSignInForm ? "New to Netflix?" : "Already have an account?"} <button onClick={toggleForm} className="hover:underline hover:cursor-pointer">{isSignInForm ? "Sign Up Now" : "Sign In Now"}</button></p>
      </form>
    </>
  );
};

export default Login;
