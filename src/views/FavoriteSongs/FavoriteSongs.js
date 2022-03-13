import "./FavoriteSongs.css";

import Song from "../../components/Song/Song";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FavoriteSongs() {
  const [fav, setFav] = useState([]);
  const token = localStorage.getItem("Token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const favSongs = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:5001/songs/getfavorite",
      headers: headers,
    };
    const res = await axios(options);
    console.log(res.data);
    setFav(res.data);
  };

  useEffect(() => {
    favSongs();
    console.log(fav);
  }, []);

  return (
    <div className="container-favorite">
      <div className="header-favoritesongs">My Favorite Songs</div>
      <ul className="list-favorite-songs">
        {fav.map((s) => (
          <Song title={s.title} img={s.img} id={s.src} />
        ))}
      </ul>
    </div>
  );
}
