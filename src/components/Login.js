import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-black text-white rounded-lg bg-opacity-90">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg bg-slate-600"
          />
        )}
        <input
          type="text"
          placeholder="email or phone number"
          className="p-4 my-4 w-full rounded-lg bg-slate-600"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full rounded-lg bg-slate-600"
        />
        {/* {!isSignInForm && (
          <input
            type="number"
            placeholder="phone number"
            className="p-4 my-4 w-full rounded-lg bg-slate-600"
          />
        )} */}
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;