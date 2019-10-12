import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm.js";
import { Container, Row } from "reactstrap";

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
    <section className="character-list container">
      <SearchForm characterList={characterList} searchResults={searchResults} setSearchResults={setSearchResults} />
      <div className="row text-center">
        {searchResults.map((character, index) => (
          <CharacterCard character={character} key={index} />
        ))}
      </div>
    </section>
  );
}
