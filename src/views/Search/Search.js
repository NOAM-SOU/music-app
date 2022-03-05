import Songs from "../../components/Songs/Songs";
import "./Search.css";

export default function Search() {
  return (
    <div className="div-container-search">
      <div className="header-search-first">Search</div>
      <div className="div-input-search">
        <input name="search" placeholder="Search" id="input-search" />
      </div>
      <div className="div-results-songs">
        <Songs />
      </div>
    </div>
  );
}
