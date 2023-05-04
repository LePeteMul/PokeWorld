import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../styles/_cardsCompare.scss";

export default function CardsCompare({ index }) {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [hp, setHp] = useState();
  const [type, setType] = useState();
  const [attack, setAttack] = useState();
  const [defense, setDefense] = useState();
  const [speed, setSpeed] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((res) => {
        setName(res.data.name);
        setImage(res.data.sprites.other.dream_world.front_default);
        setHp(res.data.stats[0].base_stat);
        setType(res.data.types[0].type.name);
        setAttack(res.data.stats[1].base_stat);
        setDefense(res.data.stats[2].base_stat);
        setSpeed(res.data.stats[5].base_stat);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="card-compare">
      <div className="image-name-compare">
        <img className="img-compare" src={image} alt="card" />
        <p className="name-compare">{name}</p>
      </div>
      <div className="stats-compare">
        <p className="stat-compare">Hp = {hp}</p>
        <p className="stat-compare">Type = {type}</p>
        <p className="stat-compare">Attack = {attack}</p>
        <p className="stat-compare">Defense = {defense}</p>
        <p className="stat-compare">Speed = {speed}</p>
      </div>
    </div>
  );
}

CardsCompare.propTypes = {
  index: PropTypes.number.isRequired,
};
