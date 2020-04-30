import React, { useState, useEffect } from 'react';
import Characters from '../src/components/Characters.jsx';
import { getCharacters } from '../services/getCharacters.jsx';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
  
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, [page]);


  const changePage = by => setPage(prevPage => prevPage + by);

  return (
    <>
      <Characters characters={characters} />
      <button onClick={() => changePage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => changePage(1)} disabled={characters.length < 20}>&gt;</button>
    </>
  );
};

export default CharacterList;

