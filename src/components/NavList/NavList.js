import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import "./NavList.css";
import MyContext from "../Context/MyContext";

export default function NavList() {
  const { play } = useContext(MyContext);
  return (
    <nav className="list-nav">
      <div className="div-scroller">
        <ul className="list-bro-ul">
          {play.map((p) => (
            <li key={Math.random()}>
              <Link className="link-list-nav" to={`/playlistpage/${p._id}`}>
                {p.playlistName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
