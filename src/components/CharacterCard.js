import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function CharacterCard(props) {
  const character = props.character;
  return (
    <div className="character col">
      <Card>
        <CardImg top width="100%" src={character.image} />
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardText><strong>Status</strong>: {character.status}</CardText>
          <CardText><strong>Species</strong>: {character.species}</CardText>
          <CardText><strong>Gender</strong>: {character.gender}</CardText>
          <Link to={`/characters/${(character.id)}`}><Button>View Character</Button></Link>
        </CardBody>
      </Card>
    </div>
  )
}
