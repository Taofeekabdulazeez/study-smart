import Logo from "@/components/common/logo";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="px-8 py-4 grid grid-cols-[auto_auto] justify-between items-center">
      <Logo />
      <Nav />
    </header>
  );
}
