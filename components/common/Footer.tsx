import React from "react";
import Image from "next/image";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <footer>
      <div className="bg-dark-blue-900 text-white">
        <div className="container py-12 md:py-28 md:grid grid-cols-2">
          <div>
            <h2 id="kontakt" className="text-h2">
              Kontaktujte ma
            </h2>
            <div className="mt-8 flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
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
                <a href="https://www.linkedin.com/in/gabika-zubrikova-147a6363/">
                  Gabika Zúbriková
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:pl-20">
            <h2 className="text-h2">Sledujte DÁSATO</h2>
            <div className="mt-8 flex flex-row justify-between items-center w-full">
              <a href="https://spoti.fi/3D1lvb6" className="w-[38px]">
                <Image
                  src="/images/spotify-no-text.png"
                  width={38}
                  height={38}
                  layout="responsive"
                  alt="Spotify logo"
                />
              </a>
              <a href="https://apple.co/3wt7a4O" className="w-[38px]">
                <Image
                  src="/images/Apple-podcasts.png"
                  width={38}
                  height={38}
                  layout="responsive"
                  alt="Apple Podcasts logo"
                />
              </a>

              <a href="https://bit.ly/3KWBGcK" className="w-[46px]">
                <Image
                  src="/images/Goole-podcasts.png"
                  width={46}
                  height={37}
                  layout="responsive"
                  alt="Google Podcasts logo"
                />
              </a>
              <a href="https://bit.ly/DASATO">
                <Image
                  src="/images/Youtube-no-text.png"
                  width={41}
                  height={28}
                  layout="responsive"
                  alt="Youtube logo"
                />
              </a>
              <a href="https://bit.ly/DASATO">
                <Image
                  src="/images/Instagram.png"
                  width={36}
                  height={36}
                  alt="Instagram logo"
                />
              </a>
              <a href="https://bit.ly/DASATO">
                <Image
                  src="/images/Facebook.png"
                  width={56}
                  height={56}
                  alt="Facebook logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-6 flex flex-row items-center">
        <div>© 2022 DÁSATO - Svet podľa Gabiky</div>
        <div className="grow text-right text-sm text-zinc-400">
          Made with ❤️ <a href="https://labzone.tech"> LabZone</a>
        </div>
      </div>
    </footer>
  );
}
