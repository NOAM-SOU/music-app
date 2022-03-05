import Search from "./views/Search/Search";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import NewPlaylist from "./views/NewPlaylist/NewPlaylist";
import FavoriteSongs from "./views/FavoriteSongs/FavoriteSongs";
import SignUp from "./views/SignUp/SignUp";
import Login from "./views/Login/Login";
import Nav from "./components/Nav/Nav";
import NavList from "./components/NavList/NavList";
import NavUser from "./components/NavUser/NavUser";

export default function App() {
  return (
    <div className="app">
      <Router>
        <div className="navbar-div">
          <Nav />
          <NavList />
          <NavUser />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/newplaylist" element={<NewPlaylist />} />
          <Route path="/favorite" element={<FavoriteSongs />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<FavoriteSongs />} />x
        </Routes>
      </Router>
    </div>
  );
}
