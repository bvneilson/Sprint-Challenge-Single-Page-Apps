import React, { useState, useEffect } from "react";

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState();

  const handleChange = (event) => {
    //console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = props.characterList.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    props.setSearchResults(results);
  }, [searchTerm]);

  return (
    <section className="search-form">
       <label htmlFor="filter">Filter by Name: </label>
       <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </section>
  );
}
