"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

const Register = () => {
  interface Data {
    email: string;
    password: string;
    confirmPassword: string;
  }

  const [data, setData] = useState<Data>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;

    try {
      if (email == "") {
        toast.error("Please enter your email");
      } else if (!email.includes("@")) {
        toast.error("Please enter valid email");
      } else if (password.length < 8) {
        toast.error("Password should be at leaste 8 characters");
      } else if (password !== confirmPassword) {
        toast.error("Please correct your confirmation password");
      } else {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const res = await response.json();
        console.log(res);
        if (response.status == 200) {
          toast.success("User Registered Successfully");
          router.push("/login");
        }
        if (response.status == 400) {
          toast.error(res.msg);
        }
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
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
          onChange={handleChange}
        />

        <div className="flex">
          <input
            name="password"
            type={isPasswordShow ? "text" : "password"}
            className="w-full border border-gray-300 text-black rounded-s mb-2 px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black text-[18px]"
            placeholder="Password should be 8 characters"
            required
            onChange={handleChange}
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
            name="confirmPassword"
            type={isConfirmPasswordShow ? "text" : "password"}
            className="w-full border border-gray-300 text-black rounded-s px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black text-[18px]"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
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
            onClick={(event) => handleSubmit(event)}
            disabled={isLoading}
            className=" w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-6 text-[16px]"
          >
            {!isLoading ? (
              "Register"
            ) : (
              <FontAwesomeIcon
                icon={faCircleNotch}
                className="animate-spin h-5 w-5 mr-3 text-white"
              />
            )}
          </button>
        </div>

        <div className="mt-5 text-sm">
          <span className="text-[#c9bebe]">Already to Disney+? </span>
          <Link
            href="/login"
            className=" text-center  text-[16px] hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
