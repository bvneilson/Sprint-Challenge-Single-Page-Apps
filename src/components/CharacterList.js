import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm.js";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacterList(response.data.results);
          setSearchResults(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getCharacters();
  }, []);

  if(!searchResults) {
    return <h2>Loading character data...</h2>;
  }

  return (
    <section className="character-list">
      <SearchForm characterList={characterList} searchResults={searchResults} setSearchResults={setSearchResults} />
      {searchResults.map((character, index) => (
        <Link to={`/characters/${(character.id)}`} key={index}><CharacterCard character={character} /></Link>
      ))}
    </section>
  );
}
