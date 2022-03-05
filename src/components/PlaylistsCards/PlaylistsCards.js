import Playlist from "../Playlist/Playlist";
import "./PlaylistsCards.css";

export default function PlaylistsCards() {
  const playlists = [
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
  ];
  return (
    // <div className="div-playlists-cards">
    <ul className="list-content-ul">
      {playlists.map((p) => (
        <Playlist name={p.name} />
      ))}
    </ul>
  );
}
