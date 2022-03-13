import "./Song.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Song(props) {
  const token = localStorage.getItem("Token");

  const addToFav = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const song = {
      title: props.title,
      src: props.id,
      provider: "Youtube",
      img: props.img,
    };
    const res = await axios.post(
      "http://localhost:5001/songs/addtofavorite",
      song,
      { headers: headers }
    );
    console.log(res);
  };

  return (
    <li key={props.id} className="song-card">
      <div className="div-song-img">
        <img id="img-song" src={props.img} alt="img" />
      </div>
      <div className="div-info-song">
        <div className="title-song">{props.title}</div>
      </div>
      <div className="div-icons-card">
        <Link id="link-play-icon" to={`/songplay/${props.id}`}>
          <AiFillPlayCircle id="play-icon" />
        </Link>

        <FcLikePlaceholder id="like-icon" onClick={addToFav} />
        <MdAdd id="add-icon" />
      </div>
    </li>
  );
}
