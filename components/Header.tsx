import Image from "next/image";
import profile from "@/public/profile.svg";
import Link from "next/link";
import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";
import logo from "@/public/logo.svg";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src={logo}
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer"}
        />
      </Link>

      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <button>
          <Image
            src={profile}
            alt="icon"
            width={45}
            height={45}
            className="-mt-1 border outline-white rounded-full"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
