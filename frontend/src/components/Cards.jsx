import React, { react } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import "../styles/_cards.scss";

function Cards() {
  const [data, setData] = react.useState();
  const [pokemonName, setPokemonName] = react.useState();
  const [weight, setWeight] = react.useState();
  const [id, setId] = react.useState();
  const [height, setHeight] = react.useState();
  const [hp, setHp] = react.useState();
  const [type, setType] = react.useState();

  react.useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/charizard`)
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
          <div className="height">
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

export default Cards;
