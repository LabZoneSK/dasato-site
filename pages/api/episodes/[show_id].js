import { getEpisodes } from "../../../lib/spotify";

export default async (req, res) => {
  const { show_id } = req.query;
  const response = await getEpisodes(show_id);
  const { items } = await response.json();

  const episodes = items.slice(0, 10).map((track) => ({
    songUrl: track.external_urls.spotify,
    title: track.name,
    description: track.description,
    images: track.images,
    release_date: track.release_date,
    audio_preview_url: track.audio_preview_url,
    html_description: track.html_description,
  }));

  return res.status(200).json({ episodes });
};
