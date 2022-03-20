import axios from "axios";
import { useState } from "react";
import "./NewPlaylist.css";

export default function NewPlaylist() {
  const [playName, setPlayName] = useState("");
  const token = localStorage.getItem("Token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const data = { playlistName: playName };

  const newPlay = async () => {
    const res = await axios.post(
      "http://localhost:5001/playlist/newplaylist",
      data,
      {
        headers: headers,
      }
    );
    console.log(res);
    console.log("suc");
    return res;
  };

  return (
    <div className="div-form-newplaylist">
      <div className="div-form-newplaylist-1">
        <div className="header-form-newplaylist">New Playlist</div>
        <form className="form-newplaylist">
          <input
            id="input-newplaylist"
            onChange={(e) => {
              setPlayName(e.target.value);
            }}
          />
          <div className="div-btn-newplaylist">
            <button className="btn-newplaylist" onClick={newPlay}>
              Save
            </button>
            <button className="btn-newplaylist-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
