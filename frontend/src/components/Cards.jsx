import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../styles/_cards.scss";

export default function Cards({ index }) {
  const [data, setData] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [weight, setWeight] = useState();
  const [id, setId] = useState();
  const [height, setHeight] = useState();
  const [hp, setHp] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((res) => {
        setData(res.data);
        setPokemonName(res.data.name);
        setWeight(res.data.weight);
        setId(res.data.id);
        setHeight(res.data.height);
        setHp(res.data.stats[0].base_stat);
        setType(res.data.types[0].type.name);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="ContainerCard">
      <div className="Card">
        <div className="Name-Hp">
          <p>#{id}</p>
          <h2>{pokemonName}</h2>
          <p>{hp} Hp</p>
        </div>
        <div className="Image">
          <img
            src={
              data ? data.sprites.other.dream_world.front_default : "Loading..."
            }
            alt={pokemonName}
          />
        </div>
        <div className="Type">
          <p>type: {type}</p>
        </div>
        <div className="Physicals">
          <div className="Weight">
            <p>weight: {weight / 10}kg</p>
          </div>
          <div className="Height">
            <p>height: {height / 10}m</p>
          </div>
        </div>
        <div className="Abilities">
          <p>Abilities : </p>
          <div className="Ability">
            {data
              ? data.abilities.map((value) => {
                  return <div>{value.ability.name}</div>;
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  index: PropTypes.number.isRequired,
};
