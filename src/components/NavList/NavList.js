import { Link } from "react-router-dom";
import "./NavList.css";

export default function NavList() {
  const playlists = [
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
    {
      name: "My songs",
    },
  ];
  return (
    <nav className="list-nav">
      {/* <div className="div-scroller"> */}
      <ul className="list-bro-ul">
        {playlists.map((p) => (
          <li key={Math.random()}>
            <Link className="link-list-nav" to="/">
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </nav>
  );
}
