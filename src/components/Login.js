import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    console.log("Button Clicked");
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="z-30 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <div className="w-full h-full backdrop-brightness-50">
        {/* Header */}
        <Header />

        {/* Form */}
        <div className="bg-black bg-opacity-80 px-20 py-16 mx-auto w-4/12 text-white rounded-md ">
          <form className="flex flex-col">
            <h1 className="text-3xl font-semibold pb-6">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <div className="relative ">
                <input
                  id="name"
                  type="text"
                  placeholder=" "
                  className="block my-2 py-3 px-5 w-full bg-[#333] rounded-md peer"
                />
                <label
                  for="name"
                  className="absolute text-gray-400 top-5 z-10 left-5 origin-[0] scale-75 transform -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 duration-300"
                >
                  Name
                </label>
              </div>
            )}
            <div className="relative ">
              <input
                id="email"
                type="email"
                placeholder=" "
                className="block my-2 py-3 px-5 w-full bg-[#333] rounded-md peer"
              />
              <label
                for="email"
                className="absolute text-gray-400 top-5 z-10 left-5 origin-[0] scale-75 transform -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 duration-300"
              >
                Email
              </label>
            </div>

            <div className="relative ">
              <input
                id="password"
                type="password"
                placeholder=" "
                className="block my-2 py-3 px-5 w-full bg-[#333] rounded-md peer"
              />
              <label
                for="password"
                className="absolute text-gray-400 top-5 z-10 left-5 origin-[0] scale-75 transform -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 duration-300"
              >
                Password
              </label>
            </div>

            <button type="submit" className="p-3 my-6 rounded-md bg-red-600">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="mt-10">
            <p className="text-gray-500 inline">
              {isSignIn ? "New to Netflix? " : "Already have an account? "}
            </p>
            <button
              type="none"
              onClick={handleToggle}
              className="inline text-white cursor-pointer"
            >
              {isSignIn ? "Sign up " : "Sign in "}
            </button>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
