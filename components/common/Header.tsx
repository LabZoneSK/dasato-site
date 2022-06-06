import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <div className="shadow-sm bg-white">
      <nav className="block md:flex items-center justify-between container">
        <Link href="/">
          <a className="block mb-4 text-center md:inline-flex items-center justify-center pt-4">
            <Image
              src="/images/dasato-logo.png"
              alt="Logo Dasato Svet podla Gabiky"
              width={80}
              height={80}
            />
          </a>
        </Link>

        <div className="menu-items flex justify-between items-center space-x-2 text-sm font-medium text-gray-500">
          <a className="px-3 py-2 rounded-lg" href="#o-projekte">
            O projekte
          </a>

          <a className="px-3 py-2 rounded-lg" href="#o-gabike">
            O Gabike
          </a>

          <a className="px-3 py-2 rounded-lg" href="#epizody">
            Epizódy
          </a>

          <a className="px-3 py-2 rounded-lg" href="#kontakt">
            Kontakt
          </a>
        </div>
      </nav>
    </div>
  );
}
