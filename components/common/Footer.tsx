import React from "react";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <footer>
      <div className="bg-dark-blue-900 text-white">
        <div className="container py-28 grid grid-cols-2">
          <div>
            <h2 className="text-h2">Kontaktujte ma</h2>
            <div className="mt-8 flex flex-row space-x-6">
              <div>
                <span className="block font-bold">Telefon</span>
                <span>0917 429 982</span>
              </div>
              <div>
                <span className="block font-bold">E-mail</span>
                <span>gabika.zubrikova@gmail.com</span>
              </div>
              <div>
                <span className="block font-bold">LinkedIn</span>
                <span>Gabika Zubrikova</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-h2">Sledujte Dá sa to</h2>
          </div>
        </div>
      </div>
      <div className="container py-6">
        <div>© 2022 Dá sa to</div>
      </div>
    </footer>
  );
}