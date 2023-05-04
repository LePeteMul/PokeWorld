import { useState } from "react";
import { Link } from "react-router-dom";
import pokeballMenuTop from "../assets/images/pokeball_Top.png";
import pokeballMenuBottom from "../assets/images/pokeball_Bottom.png";

function BurgerMenu() {
  const [burgerOpen, setBurgerOpen] = useState(true);
  const [menuVisible, setMenuVisible] = useState("");
  const handleBurger = () => {
    setBurgerOpen(!burgerOpen);

    if (burgerOpen) {
      setMenuVisible("show");
    } else {
      setMenuVisible("hide");
    }
  };

  return (
    <>
      <nav id="navBar" className={menuVisible}>
        <ul>
          <li>
            <Link to="/AppPokeworld">Home</Link>
          </li>
          <li>
            <Link to="/MyDeck">My Deck</Link>
          </li>
          <li>
            <Link to="/PlaylistPage">Playlist</Link>
          </li>
          <li>
            <Link to="/Comparator">Comparator</Link>
          </li>
        </ul>
      </nav>
      <div className="burger-box">
        <button
          className="burger-box-button"
          type="button"
          onClick={handleBurger}
        >
          <img className="pokeball-menu-top" src={pokeballMenuTop} alt="" />
          <img
            className="pokeball-menu-bottom"
            src={pokeballMenuBottom}
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default BurgerMenu;
