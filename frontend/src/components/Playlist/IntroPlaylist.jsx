import jigglypuff from "../../assets/images/jigglypuff.gif";

function IntroPlaylist() {
  return (
    <div className="intro-playlist-box">
      <h1 className="intro-playlist-title">Welcome to PokeWorld Playlist!</h1>
      <br />
      <p>
        Here, you can <span className="intro-bold-words">listen</span> to
        awesome music from the oldest pokemon games!
      </p>
      <br />
      <img className="jigglypuff" src={jigglypuff} alt="" />
    </div>
  );
}

export default IntroPlaylist;
