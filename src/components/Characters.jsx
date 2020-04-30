
import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character.jsx';


const Characters = ({ characters }) => {
  const characterElements = characters.map((character, i) => (
    <li key={i}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul className={Characters}>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string
  })).isRequired
};

export default Characters;
