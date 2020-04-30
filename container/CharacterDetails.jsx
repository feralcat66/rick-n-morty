import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../src/components/characterDetail';
import { getDetails } from '../services/getCharacters.jsx';

const CharacterDetailPage = ({ match }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getDetails(match.params.id)
      .then(character => setCharacter(character));
  }, []);

  return <CharacterDetail name={character.name}
    species={character.species}
    status={character.status}
    image={character.image} />;
};

CharacterDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetailPage;
