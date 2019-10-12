import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

export default function Character(props) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const { id } = props.match.params;

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          console.log(response.data);
          setCharacter(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params]);

  if(!character) {
    return <h3>Loading character info...</h3>
  }

  return (
    <CharacterCard character={character} />
  )
}
