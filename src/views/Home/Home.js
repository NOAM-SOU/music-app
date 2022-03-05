import Nav from "../../components/Nav/Nav";
import NavList from "../../components/NavList/NavList";
import NavUser from "../../components/NavUser/NavUser";
import PlaylistsCards from "../../components/PlaylistsCards/PlaylistsCards";
import FavoriteSongs from "../FavoriteSongs/FavoriteSongs";
import NewPlaylist from "../NewPlaylist/NewPlaylist";
import SignUp from "../SignUp/SignUp";
// import Login from "../../components/Login/Login";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-div-first">
      {/* <FavoriteSongs /> */}
      {/* <NewPlaylist /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <div className="navbar-div">
        <Nav />
        <NavList />
        <NavUser />
      </div> */}
      <div className="content-music">
        <PlaylistsCards />
      </div>
    </div>
  );
}
