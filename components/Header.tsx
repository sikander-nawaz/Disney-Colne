"use client";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";
import { signOut } from "next-auth/react";

function Header() {
  const handleSignOut = async () => {
    try {
      await signOut();
      // Optionally redirect to the landing page or a specific route
      window.location.href = "/login"; // Redirect to landing page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="fixed w-full z-10 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer invert"}
        />
      </Link>

      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />

        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </header>
  );
}

export default Header;
