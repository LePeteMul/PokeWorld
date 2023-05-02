import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro-box">
      <h1 className="intro-title">Welcome to PokeWorld!</h1>
      <br />
      <p>
        Here, you can <span className="intro-bold-words">search</span>,{" "}
        <span className="intro-bold-words">compare</span> and{" "}
        <span className="intro-bold-words">build </span>your own deck with your
        favorite first generation pokemon!
      </p>
      <nav className="navBar">
        <ul>
          <li>
            <Link to="/AppPokeworld">Home</Link>
          </li>
          <li>
            <Link to="/MyDeck">My Deck</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Intro;
