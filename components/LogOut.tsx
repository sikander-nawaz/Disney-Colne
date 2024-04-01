"use client";
import React from "react";
import profile from "@/public/profile.svg";
import { signOut } from "next-auth/react";
import Image from "next/image";

const LogOut = () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      <Image
        src={profile}
        alt="icon"
        width={45}
        height={45}
        className="-mt-1 border outline-white rounded-full"
      />
    </button>
  );
};

export default LogOut;
