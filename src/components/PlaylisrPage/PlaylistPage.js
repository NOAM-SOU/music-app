import axios from "axios";
import "./PlaylistPage.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MyContext from "../Context/MyContext";
import Song from "../Song/Song";

export default function PlaylistPage() {
  const [songs, setSongs] = useState([]);
  const [playName, setPlayName] = useState("");
  const { id } = useParams();
  const { headers } = useContext(MyContext);

  const getList = async () => {
    const options = {
      method: "GET",
      url: `http://localhost:5001/playlist/get/${id}`,
      headers: headers,
    };
    const res = await axios(options);
    console.log(res);
    setPlayName(res.data.playlistName);
    setSongs(res.data.playlist);
  };

  useEffect(() => {
    getList(songs);
    console.log(songs);
  }, []);

  return (
    <div className="container-playlistpage">
      <div className="header-playlistpage">{playName}</div>
      <ul className="list-playlistpage-songs">
        {songs.map((s) => (
          <Song title={s.title} img={s.img} id={s.src} />
        ))}
      </ul>
    </div>
  );
}
