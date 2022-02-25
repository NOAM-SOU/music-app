import Nav from "../../components/Nav/Nav";
import NavList from "../../components/NavList/NavList";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-div-first">
      <div className="navbar-div">
        <Nav />
        <NavList />
      </div>
      <div className="content-music"></div>
    </div>
  );
}
