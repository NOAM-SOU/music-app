import axios from "axios";
import { useState } from "react";
import Songs from "../../components/Songs/Songs";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

export default function Search() {
  const [songs, setSongs] = useState([]);
  const [newSearch, setNewSearch] = useState("");

  const resultSearch = async () => {
    const options = {
      method: "GET",
      url: `http://localhost:5001/search/api/mp3?q=${newSearch}`,
    };
    const res = await axios(options);
    console.log(res.data);
    setSongs(res.data);
  };

  return (
    <div className="div-container-search">
      <div className="header-search-first">Search</div>
      <div className="div-input-search">
        <BsSearch onClick={resultSearch} />
        <input
          name="search"
          placeholder="Search"
          id="input-search"
          onChange={(e) => {
            setNewSearch(e.target.value);
          }}
        />
      </div>
      <div className="div-results-songs">
        <Songs songs={songs} />
      </div>
    </div>
  );
}
