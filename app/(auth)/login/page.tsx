"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

const Login = () => {
  interface Data {
    email: string;
    password: string;
  }

  const [data, setData] = useState<Data>({
    email: "",
    password: "",
  });
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: userData, status: userSession } = useSession();

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userSession == "authenticated") {
      router.replace("/");
    }
  }, [userSession, router]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const email = data.email;
    const password = data.password;

    try {
      if (email == "") {
        toast.error("Please enter your email");
      } else if (!email.includes("@")) {
        toast.error("Please enter valid email");
      } else if (password.length < 8) {
        toast.error("Password should be at leaste 8 characters");
      } else {
        const response = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (response?.error) {
          toast.error("Invalid username and password");
        }
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  if (userSession === "loading") {
    return (
      <div className="w-full h-full flex justify-center items-center mt-80">
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="animate-spin h-5 w-5 mr-3"
        />
        Loading
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="p-8 rounded-lg shadow-lg w-[25rem]">
        <div className="mb-10 flex justify-center items-center">
          <Image src={logo} alt="logo" width={150} height={150} />
        </div>

        <h1 className="text-xl font-semibold mb-3">Login with your email</h1>

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
            placeholder="Password"
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

        <div className="text-center">
          <button
            onClick={(event) => handleSubmit(event)}
            disabled={isLoading}
            className=" w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-6 text-[16px]"
          >
            {!isLoading ? (
              "Login"
            ) : (
              <FontAwesomeIcon
                icon={faCircleNotch}
                className="animate-spin h-5 w-5 mr-3"
              />
            )}
          </button>
        </div>

        <div className="mt-5 text-sm">
          <span className="text-[#c9bebe]">New to Disney+? </span>
          <Link
            href="/register"
            className=" text-center  text-[16px] hover:underline"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
