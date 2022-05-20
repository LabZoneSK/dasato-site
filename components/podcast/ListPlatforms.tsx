import React from "react";
import Image from "next/image";

type Props = {};

export default function ListPlatforms({}: Props) {
  return (
    <div className="mt-8 flex flex-row justify-between items-center w-full">
      <a href="https://apple.co/3wt7a4O" className="w-[120px]">
        <Image
          src="/images/SK_Apple_Podcasts_Listen_Badge_RGB.svg"
          width={90}
          height={30}
          layout="responsive"
        />
      </a>
      <a href="https://spoti.fi/3D1lvb6" className="w-[90px]">
        <Image
          src="/images/Spotify_Logo_RGB_Green.png"
          width={90}
          height={30}
          layout="responsive"
        />
      </a>
      <a href="https://bit.ly/3KWBGcK" className="w-[120px]">
        <Image
          src="/images/google-podcast.png"
          width={162}
          height={26}
          layout="responsive"
        />
      </a>
      <a href="https://bit.ly/DASATO">
        <Image src="/images/youtube.png" width={91} height={19} />
      </a>
    </div>
  );
}
