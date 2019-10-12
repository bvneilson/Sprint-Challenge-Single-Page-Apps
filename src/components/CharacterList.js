import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard.js";

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState();

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacterList(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getCharacters();
  }, []);

  if(!characterList) {
    return <h2>Loading character data...</h2>;
  }

  return (
    <section className="character-list">
      {characterList.map((character, index) => (
        <CharacterCard props={character} key={index} />
      ))}
    </section>
  );
}

export default CharacterList;
