import Search from "./views/Search/Search";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import NewPlaylist from "./views/NewPlaylist/NewPlaylist";
import FavoriteSongs from "./views/FavoriteSongs/FavoriteSongs";
import SignUp from "./views/SignUp/SignUp";
import Login from "./views/Login/Login";
import Player from "./components/Player/Player";
import Nav from "./components/Nav/Nav";
import NavList from "./components/NavList/NavList";
import NavUser from "./components/NavUser/NavUser";
import MyContext from "./components/Context/MyContext";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaylistPage from "./components/PlaylisrPage/PlaylistPage";

export default function App() {
  const [userConnected, setUserConnected] = useState(false);
  const [userAccessToken, setUserAccessToken] = useState(null);
  const [play, setPlay] = useState([]);

  const token = localStorage.getItem("Token");

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setUserAccessToken(token);
    }
  }, []);
  useEffect(() => {
    if (!userAccessToken) {
      setUserConnected(false);
      return;
    }
    setUserConnected(true);
  }, [userAccessToken]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const getPlay = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:5001/playlist",
      headers: headers,
    };
    const res = await axios(options);
    console.log(res.data);
    setPlay(res.data);
  };

  useEffect(() => {
    getPlay();
    console.log(play);
  }, []);

  return (
    <div className="app">
      <MyContext.Provider
        value={{ setUserConnected, setUserAccessToken, token, play, headers }}
      >
        <Router>
          <div className="navbar-div">
            <Nav />
            <NavList />
            <NavUser />
          </div>
          <Routes>
            {/* <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} /> */}

            <Route
              exact
              path="/"
              element={<Navigate to={userConnected ? "/home" : "/login"} />}
            />
            <Route
              exact
              path="/login"
              element={userConnected ? <Navigate to="/home" /> : <Login />}
            />
            <Route
              exact
              path="/home"
              element={userConnected ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              exact
              path="/search"
              element={userConnected ? <Search /> : <Navigate to="/login" />}
            />
            <Route
              exact
              path="/newplaylist"
              element={
                userConnected ? <NewPlaylist /> : <Navigate to="/login" />
              }
            />
            <Route
              exact
              path="/favorite"
              element={
                userConnected ? <FavoriteSongs /> : <Navigate to="/login" />
              }
            />
            <Route exact path="/playlistpage/:id" element={<PlaylistPage />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route exact path="/songplay/:id" element={<Player />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
  );
}
