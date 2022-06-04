import React from "react";
import Padlock from "../images/login/padlock.svg";

export const LoginContainer = () => {
  return (
    <section className="bg-gray-100">
      <div className="container py-10 mx-auto p-6  w-full md:w-[600px]">
        <form className="bg-white border p-6">
          <h2 className="font-bold text-[18px] mb-3">Login</h2>
          <div className="flex flex-col mb-4">
            <label className="text-xs mb-2">Email address</label>
            <input
              type="email"
              name="email"
              required
              className="border border-gray-300 px-2 outline-none"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-xs mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              className="border border-gray-300 px-2 outline-none"
            />
          </div>
          <div
            className="flex justify-center bg-blue p-2 text-xs text-white cursor-pointer w-[150px] m-auto items-center"
            onClick={() =>
              alert("I have not yet implemented the authentication")
            }
          >
            <img className="w-[13px] mr-1" src={Padlock} alt="pad-lock" />
            <input type="submit" value="Login" />
          </div>
          <p className="text-xs text-center mt-6">
            New to Codealot?
            <span className="text-blue ml-1">
              Well don't create an account, this is just a portfolio project.
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};
