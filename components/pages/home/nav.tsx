import Link from "next/link";

const pages = ["home", "about", "features", "pricing", "contact"];

export default function Nav() {
  return (
    <nav className="flex items-center gap-48">
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
        <button className="font-medium text-xs">Login</button>
        <button className="font-medium text-xs btn-gradient px-4 py-2 rounded-lg">
          Sign up
        </button>
      </div>
    </nav>
  );
}
