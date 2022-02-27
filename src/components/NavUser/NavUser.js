import { Link } from "react-router-dom";
import { RiUserAddFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

import "./NavUser.css";

export default function NavUser() {
  return (
    <nav className="list-nav-user">
      <ul className="list-bro-ul">
        <li>
          <FaUser className="icon-user-nav" />
          <Link className="link-user-nav" to="/about">
            Login
          </Link>
        </li>

        <li>
          <RiUserAddFill className="icon-user-nav" />
          <Link className="link-user-nav" to="/users">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
