import React, { useEffect, useState } from "react";

type ListOfTracksProps = {
  episodes: any;
  clickHandler: (track: any) => void;
};

export default function ListOfTracks({
  episodes,
  clickHandler,
}: ListOfTracksProps) {
  return (
    <div id="epizody">
      {episodes && (
        <ul>
          {episodes.map((episode: any) => {
            return (
              <li
                key={episode.songUrl}
                className="mb-2 cursor-pointer"
                onClick={() => clickHandler(episode)}
              >
                {episode.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
