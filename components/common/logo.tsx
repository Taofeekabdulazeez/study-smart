import Image from "next/image";
import Link from "next/link";

import logo_image from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative">
        <Image
          // fill
          src={logo_image}
          alt="Study smart logo"
          // className="absolute"
        />
      </div>
    </Link>
  );
}
