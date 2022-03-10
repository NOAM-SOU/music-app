import Song from "../Song/Song";
import "./Songs.css";

export default function Songs(props) {
  const songs = props.songs;
  // const songs = [
  //   {
  //     title: "song",
  //     img: "https://i.pinimg.com/474x/1e/25/1c/1e251cf43d3946a11fc529ef9b6b051e--miguel-bose-celebs.jpg",
  //   },
  //   {
  //     title: "song",
  //     img: "https://i.pinimg.com/474x/1e/25/1c/1e251cf43d3946a11fc529ef9b6b051e--miguel-bose-celebs.jpg",
  //   },
  //   {
  //     title: "song",
  //     img: "https://i.pinimg.com/474x/1e/25/1c/1e251cf43d3946a11fc529ef9b6b051e--miguel-bose-celebs.jpg",
  //   },
  //   {
  //     title: "song",
  //     img: "https://i.pinimg.com/474x/1e/25/1c/1e251cf43d3946a11fc529ef9b6b051e--miguel-bose-celebs.jpg",
  //   },
  //   {
  //     title: "song",
  //     img: "https://i.pinimg.com/474x/1e/25/1c/1e251cf43d3946a11fc529ef9b6b051e--miguel-bose-celebs.jpg",
  //   },
  //   {
  //     title: "song",
  //     img: "https://i.pinimg.com/474x/1e/25/1c/1e251cf43d3946a11fc529ef9b6b051e--miguel-bose-celebs.jpg",
  //   },
  // ];
  return (
    <ul className="ul-list-songs">
      {songs.map((song) => (
        <Song title={song.title} img={song.img} id={song.id} />
      ))}
    </ul>
  );
}
