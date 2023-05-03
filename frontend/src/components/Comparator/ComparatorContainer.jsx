import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchSelector from "./SearchSelector";
import PreviewComparator from "./PreviewComparator";

function ComparatorContainer() {
  const [pokemon, setPokemon] = useState([]);
  const [name1, setPokname1] = useState("");
  const [name2, setPokname2] = useState("");
  const [pokStats1, setPokStats1] = useState([]);
  const [pokStats2, setPokStats2] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let list = [];
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((poke) => {
        console.warn(poke.data);

        list = poke.data.results;
        console.warn(list);
        setPokemon(list);
      })
      .catch((err) => console.warn(err));
  }, []);

  async function getPokemons() {
    const result1 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name1}`
    );
    setPokStats1(result1.data);
    const result2 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name2}`
    );
    setPokStats2(result2.data);
    setLoaded(true);
  }
  const onChange1 = (e) => {
    console.warn(e.target.value);
    setPokname1(e.target.value.toString());
  };
  console.warn(name1);
  const onChange2 = (e) => {
    setPokname2(e.target.value.toString());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getPokemons();
  };

  console.warn(pokStats1);

  if (loaded) {
    return (
      <div className="MyDeckContainer">
        <h2>Pokemon Comparator</h2>
        <SearchSelector
          onChange1={onChange1}
          onChange2={onChange2}
          onSubmit={onSubmit}
          options={pokemon.map((poke) => ({
            value: poke.name,
            name: poke.name,
          }))}
        />
        <PreviewComparator pokemon1={pokStats1} pokemon2={pokStats2} />
      </div>
    );
  }
  return (
    <div className="MyDeckContainer">
      <h2>Pokemon Comparator</h2>
      <SearchSelector
        onChange1={onChange1}
        onChange2={onChange2}
        onSubmit={onSubmit}
        options={pokemon.map((poke) => ({
          value: poke.name,
          name: poke.name,
        }))}
      />
    </div>
  );
}

export default ComparatorContainer;
