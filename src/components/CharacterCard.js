import React from "react";

export default function CharacterCard(props) {
  const character = props.props;
  return (
    <div className="character">
      <h3>{character.name}</h3>
    </div>
  )
}
