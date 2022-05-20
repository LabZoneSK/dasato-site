import React from "react";
import Image from "next/image";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <nav className="flex items-center justify-between container">
      <a className="inline-flex items-center justify-center pt-8" href="/">
        <Image
          src="/images/dasato-logo.png"
          alt="Logo Dasato Svet podla Gabiky"
          width={80}
          height={80}
        />
      </a>

      <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <a className="px-3 py-2 rounded-lg" href="/">
            O projekte
          </a>
        </li>

        <li>
          <a className="px-3 py-2 rounded-lg" href="">
            O Gabike
          </a>
        </li>

        <li>
          <a className="px-3 py-2 rounded-lg" href="">
            Epizody
          </a>
        </li>

        <li>
          <a className="px-3 py-2 rounded-lg" href="">
            Financovanie projektu
          </a>
        </li>
      </ul>
    </nav>
  );
}
