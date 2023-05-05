import Header from "../Header";
import Playlist from "./Playlist";
import IntroPlaylist from "./IntroPlaylist";

function PlaylistPage() {
  return (
    <div>
      <Header />
      <div className="playlist-page">
        <div className="left-container">
          <IntroPlaylist />
        </div>
        <Playlist />
      </div>
    </div>
  );
}

export default PlaylistPage;
