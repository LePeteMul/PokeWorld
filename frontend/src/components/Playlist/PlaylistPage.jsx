import Header from "../Header";
import Playlist from "./Playlist";
import IntroPlaylist from "./IntroPlaylist";

function PlaylistPage() {
  return (
    <div>
      <Header />
      <div className="playlist-page">
        <IntroPlaylist />
        <Playlist />
      </div>
    </div>
  );
}

export default PlaylistPage;
