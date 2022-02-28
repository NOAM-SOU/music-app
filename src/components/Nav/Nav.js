import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { MdFavorite } from "react-icons/md";

import "./Nav.css";

export default function Nav() {
  return (
    <nav className="first-nav">
      <ul className="list-father-ul">
        <li>
          <AiFillHome className="icon-first-nav" />
          <Link className="link-first-nav" to="/">
            Home
          </Link>
        </li>
        <li>
          <BsSearch className="icon-first-nav" />
          <Link className="link-first-nav" to="/about">
            Search
          </Link>
        </li>

        <li>
          <CgAddR className="icon-first-nav" />
          <Link className="link-first-nav" to="/users">
            New playlist
          </Link>
        </li>
        <li>
          <MdFavorite className="icon-first-nav" />
          <Link className="link-first-nav" to="/users">
            My favorite songs
          </Link>
        </li>
        <br />
      </ul>
    </nav>
  );
}
