import { Link } from "react-router-dom";
import { RiUserAddFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import MyContext from "../Context/MyContext";

import "./NavUser.css";
import { useContext } from "react";

export default function NavUser() {
  const { setUserAccessToken } = useContext(MyContext);

  const Exit = () => {
    localStorage.removeItem("Token");
    setUserAccessToken(null);
  };
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
        <li id="log-out-link" onClick={Exit}>
          <BiLogInCircle className="icon-user-nav" />
          Log out
        </li>
      </ul>
    </nav>
  );
}
