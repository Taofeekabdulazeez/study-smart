import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";

const pages = ["home", "about", "features", "pricing", "contact"];

export default function Nav() {
  return (
    <>
      <button className="md:hidden">
        <HiMenuAlt2 size={32} />
      </button>

      <nav className="items-center gap-48 hidden md:flex">
        <ul className="flex gap-6">
          {pages.map((page) => (
            <li key={page}>
              <Link href={"/"} className="text-xs capitalize">
                {page}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Link href="/login" className="font-medium text-xs">
            Login
          </Link>
          <Link
            href="/sign-up"
            className="font-medium text-xs btn-gradient px-4 py-2 rounded-lg"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </>
  );
}
