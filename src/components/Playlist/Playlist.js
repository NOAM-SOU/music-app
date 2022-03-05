import "./Playlist.css";

export default function Playlist(props) {
  return (
    <div className="playlist-card-unic">
      <div className="playlist-car-de">
        <div className="div-img-playlist">
          <img
            className="img-playlist"
            src="https://cdns-images.dzcdn.net/images/cover/4bca4e91f4b98dc5c805342f26e6be6b/350x350.jpg"
            alt="img"
          />
        </div>
        <div className="playlist-details">{props.name}</div>
        {/* <div className="playlist-details">jknjj jk </div> */}
      </div>
    </div>
  );
}
