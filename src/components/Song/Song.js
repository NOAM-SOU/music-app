import "./Song.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdAdd } from "react-icons/md";

export default function Song(props) {
  return (
    <li className="song-card">
      <div className="div-song-img">
        <img id="img-song" src={props.img} alt="img" />
      </div>
      <div className="div-info-song">
        <div className="title-song">{props.title}</div>
      </div>
      <div className="div-icons-card">
        <AiFillPlayCircle id="play-icon" />
        <FcLikePlaceholder id="like-icon" />
        <MdAdd id="add-icon" />
      </div>
    </li>
  );
}
