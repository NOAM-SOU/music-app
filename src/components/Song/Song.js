import "./Song.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Song(props) {
  const addToFav = async () => {
    const song = {
      title: props.title,
      src: props.id,
      provider: "Youtube",
    };

    const res = await axios.post(
      "http://localhost:5001/songs/add/favorite",
      song
    );
    console.log(res);
  };

  return (
    <li className="song-card">
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

        <FcLikePlaceholder id="like-icon" />
        <MdAdd id="add-icon" />
      </div>
    </li>
  );
}
