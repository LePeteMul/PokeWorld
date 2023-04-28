import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function FavCard({ index }) {
  const [data, setData] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [weight, setWeight] = useState();
  const [id, setId] = useState();
  const [height, setHeight] = useState();
  const [hp, setHp] = useState();
  const [type, setType] = useState();
  const [description, setDescription] = useState("");

  const cardStyle = `Card ${type}`;
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

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${index}`)
      .then((res) => {
        setDescription(res.data.flavor_text_entries[2].flavor_text);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const filteredDescription = description.replace(/[^A-Za-z0-9,.! ]/g, "");
  return (
    <div className="FavCard">
      <div className={cardStyle}>
        <div className="Id-Name-Hp">
          <p>#{id}</p>
          <h2 className="name">{pokemonName}</h2>
          <div className="hp">
            <p>{hp}</p>
            <p className="fontColor">Hp</p>
          </div>
        </div>
        <div className="Image">
          <img
            src={
              data ? data.sprites.other.dream_world.front_default : "Loading..."
            }
            alt={pokemonName}
          />
          <div className="Physicals">
            <div className="Weight">
              <p className="title">Weight:</p>
              <p>{weight / 10}kg</p>
            </div>
            <div className="Height">
              <p className="title">Height:</p>
              <p>{height / 10}m</p>
            </div>
          </div>
        </div>
        <div className="Type">
          <p className="title">Type:</p>
          <p className="type">{type}</p>
        </div>
        <div className="Description">
          <p className="description">{filteredDescription}</p>
        </div>
        <div className="Abilities">
          <p className="title">Abilities :</p>
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

FavCard.propTypes = {
  index: PropTypes.number.isRequired,
};

export default FavCard;
