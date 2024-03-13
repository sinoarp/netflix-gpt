import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const navigate = useNavigate();
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage , setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    const message = checkValidData(
      isSignInForm ? false :name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if(message) return;
    
    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocJSRBPNvr5evXwpTz6L_kyimrnBvvFgOkmILHcdhwzaMTU=s360-c-no",
          })
            .then(() => {
               const {uid, email, displayName, photoURL} = auth.currentUser;
               dispatch(
                 addUser({
                   uid: uid,
                   email: email,
                   displayName: displayName,
                   photoURL: photoURL,
                 })
               );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });   
    }
    else{
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
        navigate("/browse");
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-black text-white rounded-lg bg-opacity-90"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg bg-slate-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email or phone number"
          className="p-4 my-4 w-full rounded-lg bg-slate-600"
        />
        <input
          ref={password}
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
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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