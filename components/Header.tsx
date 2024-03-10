import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <div>
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
        <ThemeToggler />
      </div>
    </div>
  );
}

export default Header;
