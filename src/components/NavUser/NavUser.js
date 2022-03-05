import { Link } from "react-router-dom";
import { RiUserAddFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";

import "./NavUser.css";

export default function NavUser() {
  return (
    <nav className="list-nav-user">
      <ul className="list-bro-ul">
        <li>
          <FaUser className="icon-user-nav" />
          <Link className="link-user-nav" to="/login">
            Login
          </Link>
        </li>

        <li>
          <RiUserAddFill className="icon-user-nav" />
          <Link className="link-user-nav" to="/register">
            Sign up
          </Link>
        </li>
        <li id="log-out-link">
          <BiLogInCircle className="icon-user-nav" />
          {/* <Link className="link-user-nav" to="/logout"> */}
          Log out
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
}
