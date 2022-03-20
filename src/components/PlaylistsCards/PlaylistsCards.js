import { useContext } from "react";
import MyContext from "../Context/MyContext";
import Playlist from "../Playlist/Playlist";
import "./PlaylistsCards.css";

export default function PlaylistsCards() {
  const { play } = useContext(MyContext);

  return (
    // <div className="div-playlists-cards">
    <ul className="list-content-ul">
      {play.map((p) => (
        <Playlist key={Math.random()} name={p.playlistName} />
      ))}
    </ul>
  );
}
