import React from 'react';
import './search.css';
import { Prompt } from 'react-router';

const Search = (props) => (
  <form 
  className="Search"
  onSubmit={props.handleSubmit}>
    <Prompt 
      when={props.prompt}
      message="¿Estás seguro de querer abandonar la página?"
    />
    <input
      ref={props.setRef}
      className="Search-input"
      placeholder="Busca tu video favorito"
      type="text"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
);

export default Search;
