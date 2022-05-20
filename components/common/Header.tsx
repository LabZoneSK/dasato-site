import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <nav className="flex items-center justify-between container">
      <Link href="/">
        <a className="inline-flex items-center justify-center pt-8">
          <Image
            src="/images/dasato-logo.png"
            alt="Logo Dasato Svet podla Gabiky"
            width={80}
            height={80}
          />
        </a>
      </Link>

      <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <a className="px-3 py-2 rounded-lg" href="#o-projekte">
            O projekte
          </a>
        </li>

        <li>
          <a className="px-3 py-2 rounded-lg" href="#o-gabike">
            O Gabike
          </a>
        </li>

        <li>
          <a className="px-3 py-2 rounded-lg" href="#epizody">
            Epizody
          </a>
        </li>

        <li>
          <a className="px-3 py-2 rounded-lg" href="#financovanie">
            Financovanie projektu
          </a>
        </li>
      </ul>
    </nav>
  );
}
