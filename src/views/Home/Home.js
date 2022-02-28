import Nav from "../../components/Nav/Nav";
import NavList from "../../components/NavList/NavList";
import NavUser from "../../components/NavUser/NavUser";
import PlaylistsCards from "../../components/PlaylistsCards/PlaylistsCards";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-div-first">
      <div className="navbar-div">
        <Nav />
        <NavList />
        <NavUser />
      </div>
      <div className="content-music">
        {/* <div className="div-scroller-content"><PlaylistsCards /></div> */}
      </div>
    </div>
  );
}
