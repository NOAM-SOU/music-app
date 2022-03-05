import "./NewPlaylist.css";

export default function NewPlaylist() {
  return (
    <div className="div-form-newplaylist">
      <div className="div-form-newplaylist-1">
        <div className="header-form-newplaylist">New Playlist</div>
        <form className="form-newplaylist">
          <input id="input-newplaylist" />
          <div className="div-btn-newplaylist">
            <button className="btn-newplaylist">Save</button>
            <button className="btn-newplaylist-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
