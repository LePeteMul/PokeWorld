import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/_cardsCompare.scss";

export default function CardsCompare() {
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
      <div className="image-compare">
        <img>{image}</img>
      </div>
      <div className="stats">
        <p>Hp = {hp}</p>
        <p>Type = {type}</p>
        <p>Attack = {attack}</p>
        <p>Defense = {defense}</p>
        <p>Speed = {speed}</p>
      </div>
    </div>
  );
}
