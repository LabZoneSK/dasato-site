import React, { useState, useEffect, useRef } from "react";

import ListOfTracks from "./ListOfTracks";
type Props = {};

export default function EpisodesWidget({}: Props) {
  const [episodes, setEpisodes] = useState([]);
  const [actualTrack, setActualTrack] = useState<any>({});
  const videoTag = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    fetch("/api/episodes/7t0pb8A14v87CTvIWZS6PB")
      .then((res) => res.json())
      .then((data: any) => {
        setEpisodes(data.episodes);
        setActualTrack(data.episodes[0]);
        videoTag?.current?.load();
      });
  }, []);

  const changeActualTrack = (track: any) => {
    setActualTrack(track);
    videoTag?.current?.load();
  };

  return (
    <div id="epizody" className="grid md:grid-cols-2 mt-28">
      <div>
        <h2 className="text-h2 mb-6">Epizódy DÁSATO</h2>
        {actualTrack && (
          <>
            <div id="aktualny" className="bg-green rounded p-6 mb-6">
              <h3 className="text-h5 text-white h-1">{actualTrack.title}</h3>
              <audio controls className="mt-24" ref={videoTag}>
                <source src={actualTrack.audio_preview_url} type="audio/mpeg" />
              </audio>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: actualTrack.html_description }}
            />

            <a
              href="https://www.facebook.com/dasato.svet/"
              target="_blank"
              rel="noreferrer"
              className="block mt-6 text-red"
            >
              &gt; Vypočuť si celú epizódu na Spotify
            </a>
          </>
        )}
      </div>
      <div className="md:pl-20 pt-9">
        <h3 className="text-h3 mt-6">Všetky epizódy</h3>
        <ListOfTracks episodes={episodes} clickHandler={changeActualTrack} />
      </div>
    </div>
  );
}
