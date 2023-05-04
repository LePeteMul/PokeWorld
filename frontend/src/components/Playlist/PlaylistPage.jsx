import Header from "../Header";
import Playlist from "./Playlist";
import IntroPlaylist from "./IntroPlaylist";
import vaporeon from "../../assets/images/vaporeon.png";

function PlaylistPage() {
  return (
    <div>
      <Header />
      <div className="playlist-page">
        <div className="left-container">
          <IntroPlaylist />
          <img className="vaporeon" src={vaporeon} alt="" />
        </div>
        <Playlist />
      </div>
    </div>
  );
}

export default PlaylistPage;
