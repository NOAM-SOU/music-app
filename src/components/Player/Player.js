import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "./Player.css";

function Player() {
  const { id } = useParams();
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?v=${id}`}
        width="50%"
        height="500px"
        controls={true}
        playsinline={true}
        muted={true}
      />
    </div>
  );
}
export default Player;
