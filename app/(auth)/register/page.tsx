"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

const Register = () => {
  interface Data {
    email: string;
    password: string;
    confirmPassword: string;
  }

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(false);
    toast.error("You did it!");
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="p-8 rounded-lg shadow-lg w-[25rem]">
        <div className="mb-10 flex justify-center items-center">
          <Image src={logo} alt="logo" width={150} height={150} />
        </div>

        <h1 className="text-xl font-semibold mb-3">Register with your email</h1>

        <input
          name="email"
          type="email"
          className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-400 focus:text-black text-[18px]"
          placeholder="Email"
          required
          // onChange={handleChange}
        />

        <div className="flex">
          <input
            name="password"
            type={isPasswordShow ? "text" : "password"}
            className="w-full border border-gray-300 text-black rounded-s mb-2 px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black text-[18px]"
            placeholder="Password should be 8 characters"
            required
            // onChange={handleChange}
          />

          <button
            type="button"
            className="input-group-text px-2 mb-2 bg-white rounded-e"
            id="addon-wrapping"
            onClick={() => {
              setIsPasswordShow(!isPasswordShow);
            }}
          >
            {isPasswordShow ? (
              <FontAwesomeIcon icon={faEye} className="text-black" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="text-black" />
            )}
          </button>
        </div>

        <div className="flex">
          <input
            name="password"
            type={isConfirmPasswordShow ? "text" : "password"}
            className="w-full border border-gray-300 text-black rounded-s px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black text-[18px]"
            placeholder="Confirm Password"
            required
            // onChange={handleChange}
          />

          <button
            type="button"
            className="input-group-text px-2 bg-white rounded-e"
            id="addon-wrapping"
            onClick={() => {
              setIsConfirmPasswordShow(!isConfirmPasswordShow);
            }}
          >
            {isConfirmPasswordShow ? (
              <FontAwesomeIcon icon={faEye} className="text-black" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="text-black" />
            )}
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={() => handleSubmit()}
            disabled={isLoading}
            className=" w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-6 text-[16px]"
          >
            {!isLoading ? "Hehehe" : "Hohoho"}
          </button>
        </div>

        <div className="mt-5 text-sm">
          <span className="text-[#c9bebe]">New to Disney+? </span>
          <Link
            href="/login"
            className=" text-center  text-[16px] hover:underline"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
